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

//account queries
const ehr_user = mongoose.model('User', user.schema_user);


//implement Login Query Function
function login(username, password){
    ehr_user.findOne({username:username},function(err,user){
        //return -1 if error
        if()
    });
    

    //return userID
}

//implement Registration Query Function


//implement getUserID Query Function


module.exports.login = login;
module.exports.register = register;

module.exports.createRecord = createRecord;