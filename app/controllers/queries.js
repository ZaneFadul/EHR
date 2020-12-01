// Define MongoDB query functions
const mongoose = require("mongoose");

//mongoDB documents
const user = require('../models/user');
const doc = require("./documents");

function getNumCollection(model){
    model.estimatedDocumentCount({}, function(err, res){
        return res;
    });
}

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

const ehr_user = mongoose.model('User', user.schema_user);
//implement Login Query Function
function login(username, password){
    user_id = -1;
    ehr_user.findOne({
        username:username
    }, function(err,user_q){
        user_id = user_q.userID;
        //return -1 if error
        if(err){
            console.error(err);
            return -1;
        }else{
        //query password if valid username
            ehr_user.findOne({
                password:password
            }, function(err, pass_q){
                //return -1 if error
                if(err){
                    console.error(err);
                    return -1;
                }
                else{
                    console.log("USERNAME CHECK");
                    if(pass_q == null || user_q == null){
                        return -1;
                    }

                    if(pass_q.userID == user_id){
                        console.log(`${user_id} LOGGED IN`)
                        return user_id;
                    }
                }
            })
        }
    });
}

//implement Registration Query Function
function register(name, email, password){
    ehr_user.findOne(
        {username:name},
        function(err, res){
            if(err){
                console.error(err);
                return -1;
            }
            if(!res){
                ehr_user.findOne(
                    {email:email},
                    function(err, mail_q){
                        if(err){
                            console.error(err);
                            return -1;
                        }
                        if(!mail_q){
                            //REGISTRATION SUCCESS
                            console.log("REGISTRATION SUCCESS");
                            user_id = (getNumCollection(ehr_user)+1).toString().padStart(10,"0");
                            createRecord(ehr_user, doc.createUser, ["Patient", "N/A", "N/A", name, password, email, user_id]);
                            return user_id;
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

//implement getUserID Query Function


module.exports.login = login;
module.exports.register = register;
module.exports.getNumCollection = getNumCollection;
module.exports.createRecord = createRecord;