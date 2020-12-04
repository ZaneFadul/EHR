// Define MongoDB query functions
const mongoose = require("mongoose");

//mongoDB documents
const user = require('../models/user');
const doc = require("./documents");

async function createRecord(model, create_func, p_array){
    //find if record exists with same name
    // let query = await connector.then(async()=>{
    //     return model.findOne({_id:id})
    // })

    query = false;
    if(!query){
        console.log("New document created!")
        result = await create_func(...p_array);
    }
    else{
        console.log("document already exists");
    }

    console.log(`NEW DOCUMENT : ${result}`);
}

//implement Login Query Function
async function login(email, password, res){
    user_id = -1;
    await doc.model_user.findOne({
        email:email
    }, function(err,user_q){
        //return -1 if error
        if(err || user_q == null){
            console.log(err);
            console.log(user_q);
            console.log("EMAIL NOT FOUND");
            res.send(null);
        }else{
            user_id = user_q.userID;
            //query password if valid username
            doc.model_user.findOne({
                password:password
            }, function(err, pass_q){
                //return -1 if error
                if(err || pass_q == null){
                    console.log("PASSWORD INCORRECT");
                    res.send(null);
                }
                else{
                    console.log("USERNAME CHECK");

                    if(pass_q.userID == user_id){
                        console.log(`USER ID ${user_id}: LOGGED IN`);
                        console.log("LOGIN SUCCESS");
                        if(res != undefined){
                            res.send(pass_q);
                        }
                    }
                }
            })
        }
    });
}

//implement Registration Query Function
function register(name, email, password, response, ...parent){
    //makes array from spread parameters
    org_array = Array.from(parent)
    doc.model_user.findOne(
        {username:name},
        function(err, res){
            if(err){
                console.error(err);
                return -1;
            }
            if(!res){
                doc.model_user.findOne(
                    {email:email},
                    function(err, mail_q){
                        if(err){
                            console.error(err);
                            return -1;
                        }
                        if(!mail_q){
                            //REGISTRATION SUCCESS
                            console.log("REGISTRATION SUCCESS");
                            //find number of documents, increment and format userID
                            ;(async() =>{
                                await doc.model_user.estimatedDocumentCount({}, function(err, res){
                                    //check if user is org user or patient
                                    if(parent.length != 0){
                                        console.log("TEST");
                                        if(org_array[2] == "Insurance"){
                                            createRecord(doc.model_user, doc.createUser, [org_array[2],,, name, password, email, (res+1).toString().padStart(10,"0"),org_array[1],org_array[0]]);  
                                            // createRecord(doc.model_insr_provider, doc.createProvider, [name,[],[]]);
                                        }
                                        else if(org_array[2] == "Healthcare"){
                                            createRecord(doc.model_user, doc.createUser, [org_array[2],,, name, password, email, (res+1).toString().padStart(10,"0"),org_array[1],org_array[0]]);  
                                            createRecord(doc.model_staff, doc.createStaff, [(res+1).toString().padStart(10,"0"), name, "doctor", [],[],[]])
                                        }  
                                    }else{
                                        createRecord(doc.model_user, doc.createUser, ["Patient",,, name, password, email, (res+1).toString().padStart(10,"0"),,]);    
                                    }
                                    
                                });
                                //find created document and return userID
                                doc.model_user.findOne({
                                    username:name
                                }, function(err,id){
                                    console.log(`${id}: ID registerd`);
                                    if(response != undefined){
                                        response.send(id)
                                    }
                                });
                            })();
                        }
                        else{
                            console.log("Account with email exists");
                            //return -3 if account exists with email
                            if(response != undefined){
                                response.send('-3');
                            }
                        }
                });
            }
            else{
                console.log("Account with username exists");
                //return -2 if username exists, until socketio is implemented
                if(response != undefined){
                    response.send('-2');
                }
            }
    });
}

function register_patient(user, mail, pass, res){
    register(user, mail, pass, res);
}

function register_organization_child(user, mail, pass, res, type, org_id, org_name){
    register(user, mail, pass, res, org_id, org_name, type);
}

function hasPermission(userID1, userID2, res){
    doc.model_user.findOne({userID:userID2},function(err,user){
        if(user.permissions.includes(userID1)){
            res.send("1");
        }else{
            res.send("-1");
        }
    })
}
//user_id1: current user, user_id2: searched user
function getRecords(user_id1, user_id2, type, res){
    doc.model_user.findOne({userID:user_id2},function(err,user){
        if(user.permissions.includes(user_id1)){
            if(type == "visitation"){
                //send visitation records to client
                doc.model_visit_record.findOne({userID:user_id2}, function(err, record){
                    res.send(record);
                });
            }else if(type == "payment"){
                //send payment records to client
                doc.model_payment_record.findOne({userID:user_id2}, function(err, record){
                    res.send(record);
                });
            }else if(type == "health"){
                //send health records to client
                doc.model_health_record.findOne({userID:user_id2}, function(err, record){
                    res.send(record);
                });
            }else if(type == "appointment"){
                //send appointment records to client
                doc.model_appt_record.findOne({userID:user_id2}, function(err, record){
                    res.send(record);
                });
            }else{
                res.send("-1");
            }
            

        }else{
            res.send("-1");
        }
    })
}


function addVisitationRecords(title, date, userID, patientID, reason, issue, res){
    doc.model_user.findOne({patientID:userID},function(err,user){
        if(user.permissions.includes(userID1)){
            createRecord(doc.model_visit_record, doc.createVisitationRecord, [title, date, patientID, reason, issue]);
        }else{
            res.send("-1");
        }
    })
}

//find and modify health record
async function modifyHealthRecord(data, userID, res){
    //check if user has health records, if no records upsert
    let doc = await doc.model_health_record.findOneAndUpdate(
        {patientID:userID},{data:data}, {
            new:true,
            upsert: true
        }
    )
    res.send(doc);
}


module.exports.login = login;
module.exports.register = register;
module.exports.createRecord = createRecord;
module.exports.register_patient = register_patient;
module.exports.register_organization_child = register_organization_child;
module.exports.hasPermission = hasPermission;
module.exports.getRecords = getRecords;
module.exports.addVisitationRecords = addVisitationRecords;
module.exports.modifyHealthRecord = modifyHealthRecord;

