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
                            res.send(user_id);
                        }
                    }
                }
            })
        }
    });
}

//implement Registration Query Function
function register(name, email, password, ...parent){
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
                                    if(parent != null){
                                        console.log("TEST")
                                        createRecord(doc.model_user, doc.createUser, ["Patient",,, name, password, email, (res+1).toString().padStart(10,"0"),org_array[1],org_array[0]]);    
                                    }else{
                                        createRecord(doc.model_user, doc.createUser, ["Patient",,, name, password, email, (res+1).toString().padStart(10,"0"),,]);    
                                    }
                                    
                                });
                                //find created document and return userID
                                doc.model_user.findOne({
                                    username:name
                                }, function(err,id){
                                    console.log(`${id.userID}: ID registerd`);
                                    return id.userID;
                                });
                            })();
                        }
                        else{
                            console.log("Account with email exists");
                            //return -3 if account exists with email
                            return -3;
                        }
                });
            }
            else{
                console.log("Account with username exists");
                //return -2 if username exists, until socketio is implemented
                return -2;
            }
    });
}

function register_patient(user, mail, pass){
    register(user, mail, pass);
}

function register_organization_child(user, mail, pass, org_id, org_name){
    register(user, mail, pass, org_id, org_name);
}


module.exports.login = login;
module.exports.register = register;
module.exports.createRecord = createRecord;
module.exports.register_patient = register_patient;
module.exports.register_organization_child = register_organization_child;