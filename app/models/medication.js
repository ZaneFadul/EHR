// Define JS class and MongoDB components for Prescriptions
const mongoose = require("mongoose");
// Define Prescriptions JS class

class Medication{
    constructor(name, description, dosage, side_effects){
        this.name = name,
        this.description = description,
        this.dosage = dosage
        this.side_effects = side_effects
    }
    get all(){
        return [this.name, this.description, this.dosage, this.side_effects];
    }
};

// Define Medication MongoDB component
const schema_medication = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name of medicaiton is required"]
    },
    description: {
        type: String,
        required: [true, "description of medication is required"]
    },
    dosage: {
        type: String,
        required: [true, "Dosage is required"]
    },
    side_effects: {
        type: Array,
        required: false
    }
})
// export module
module.exports.medication = Medication;
module.exports.schema_medication = schema_medication;