// Define JS class and MongoDB components for classes related to records (record, plans, data)

const mongoose = require("mongoose");

const schema_record = new mongoose.Schema({
    title: {   
        type: String,
        required: [true, 'title is required']
    },
    date: {   
        type: Date,
        required: [true, 'date is required']
    },
});

const schema_appointment_record = new mongoose.Schema({
    doctor: {   
        type: Schema.Types.ObjectId,
        required: [true, 'doctor object is required']
    },
    patient: {   
        type: Schema.Types.ObjectId,
        required: [true, 'patient object is required']
    },
    description: {   
        type: String,
        required: [true, 'description is required']
    },
    time: {   
        type: Date,
        required: [true, 'time is required']
    },
    duration: {   
        type: Number,
        required: [true, 'duration is required']
    },
});

const schema_health_record = new mongoose.Schema({
    type: {   
        type: String,
        required: [true, 'type is required']
    },
    description: {   
        type: String,
        required: [true, 'description is required']
    },
});

const schema_payment_record = new mongoose.Schema({
    amount: {   
        type: Number,
        required: [true, 'amount is required']
    },
    vendor: {   
        type: String,
        required: [true, 'vendor is required']
    },
});

const schema_visitation_record = new mongoose.Schema({
    reason: {   
        type: String,
        required: [true, 'reason is required']
    },
    issue: {   
        type: String,
        required: [true, 'issue is required']
    },
});

// export module
module.exports.schema_record = schema_record;
module.exports.schema_appointment_record = schema_appointment_record;
module.exports.schema_health_record = schema_health_record;
module.exports.schema_payment_record = schema_payment_record;
module.exports.schema_visitation_record = schema_visitation_record;
