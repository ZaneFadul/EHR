// Define JS class and MongoDB components for Prescriptions
const mongoose = require("mongoose");
// Define Prescriptions JS class

class Prescription{
    constructor(medications, date, description, start_date, end_date){
        this.medications = medications;
        this.date = date;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
    }
    get all(){
        return [this.medications, this.date, this.description, this.start_date, this.end_date];
    }
};

// Define Prescription MongoDB component
const schema_prescription = new mongoose.Schema({
    medications: {
        type: Array,
        required: [true, "medications required"]
    },
    date: {
        type: Date,
        required: [true, "type is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    start_date: {
        type: Date,
        required: [true, "start date is required"]
    },
    end_date: {
        type: Date,
        required: [true, "end date is required"]
    }
})

//loads class methods into schema to be used in mongodb document instances
schema_prescription.loadClass(Prescription);

// export module
module.exports.prescription = Prescription;
module.exports.schema_prescription = schema_prescription;