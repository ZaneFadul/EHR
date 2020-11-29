// Define MongoDB query functions
const mongoose = require("mongoose");

//mongoDB documents
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

module.exports.createRecord = createRecord;