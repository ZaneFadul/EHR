//Define JS class and MongoDB schema for Users
const mongoose = require("mongoose");
//Define JS class
class user{
    constructor(type, first_name, last_name, username, password, email, userID){
        self.type = type,
        self.first_name = first_name,
        self.last_name = last_name,
        self.user_name = username,
        self.password = password,
        self.e_mail = email,
        self.userID = userID
    }
    get all(){
        return [self.type, self.first_name, self.last_name, self.user_name, self.password, self.e_mail, self.userID];
    }
};

//Define MongoDB schema
const schema_user = new mongoose.Schema({
    type: {
        type: String,
        required: [true, "user_type required"]
    },
    first_name: {
        type: String,
        required: [false]
    },
    last_name: {
        type: String,
        required: [false]
    },
    username: {
        type: String,
        required: [true, "Username required"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    email: {
        type: String,
        required: [true, "E-mail required"]
    },
    userID: {
        type: String,
        required: [true, "UserID required"]
    },
    parent_org: {
        type: String,
        required: [false]
    },
    parent_ID: {
        type: String,
        required: [false]
    },
    permissions: {
        type: Array,
        required: [false]
    }
},{strict:false});

module.exports.user = user;
module.exports.schema_user = schema_user;