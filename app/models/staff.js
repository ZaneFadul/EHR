// Define JS class and MongoDB components for Patients

const mongoose = require("mongoose");


// Define Staff MongoDB component

const schema_staff = new mongoose.Schema({
    name: {   
        type: String,
        required: [true, 'name is required']
    },
    position: {   
        type: String,
        required: [true, 'position is required']
    },
    permissions: {   
        type: Array,
        required: [true, 'permissions is required']
    },
    patients: {   
        type: Array,
        required: [true, 'patients is required']
    },
    appointments: {   
        type: Array,
        required: [true, 'appointments is required']
    },
});


// export module
module.exports.schema_patient = schema_staff;