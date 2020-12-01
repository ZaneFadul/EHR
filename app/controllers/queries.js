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
function login(username, password){
    user_id = -1;
    doc.model_user.findOne({
        username:username
    }, function(err,user_q){
        user_id = user_q.userID;
        //return -1 if error
        if(err){
            console.error(err);
            return -1;
        }else{
        //query password if valid username
            doc.model_user.findOne({
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
                                    createRecord(doc.model_user, doc.createUser, ["Patient", "N/A", "N/A", name, password, email, (res+1).toString().padStart(10,"0")]);    
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

//implement getUserID Query Function


module.exports.login = login;
module.exports.register = register;
module.exports.createRecord = createRecord;