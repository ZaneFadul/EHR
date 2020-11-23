// Define JS class and MongoDB components for Organizations

const mongoose = require("mongoose");

// Define organization JS class
class Organization{
    constructor(orgid, name, type, info){
        this.orgid = orgid;
        this.name = name;
        this.type = type;
        this.info = info;
    }
    get data(){
        return [this.orgid, this.name, this.type, this.info];
    }
}


// Define organization MongoDB component
const schema_organization = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "organization name is required"]
    },
    type: {
        type: String,
        required: [true, "organization type is required"]
    },
    info: {
        type: String,
        required: [true, "organization info is required"]
    }
});

// export module
module.exports.orgs = Organization;
module.exports.schema_organization = schema_organization;