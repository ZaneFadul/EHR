// Define JS class and MongoDB components for Patients
const mongoose = require("mongoose");
// Define Patients JS class

class Prescription{
    constructor(medications, date, description, start_date, end_date){
        this.medications = medications,
        this.date = date,
        this.description = description,
        this.start_date = start_date,
        this.end_date = end_date
    }
    get all(){
        return [this.medications, this.date, this.description, this.start_date, this.end_date];
    }
};

// Define Patients MongoDB component

// export module
module.exports.prescription = Prescription;
module.exports.schema_prescription = schema_prescription;