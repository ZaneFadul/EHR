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


//implement getUserID Query Function


module.exports.login = login;
// module.exports.register = register;

module.exports.createRecord = createRecord;