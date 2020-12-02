 // Define JS class and MongoDB components for classes related to insurance (providers, plans, data)

const mongoose = require("mongoose");

const schema_provider = new mongoose.Schema({
    name: {   
        type: String,
        required: [true, 'name is required']
    },
    permissions: {   
        type: Array,
        required: [true, 'permissions is required']
    },
    plans: {   
        type: Array,
        required: [true, 'plans is required']
    }
});

const schema_plan = new mongoose.Schema({
    name: {   
        type: String,
        required: [true, 'name is required']
    },
    type: {   
        type: String,
        required: [true, 'type is required']
    },
    provider: {   
        type: String,
        required: [true, 'provider is required']
    },
    description: {   
        type: String,
        required: [true, 'description is required']
    },
    start_date: {   
        type: Date,
        required: [true, 'start date is required']
    },
    expiration_date: {   
        type: Date,
        required: [true, 'expiration date is required']
    },
    patients: {   
        type: Array,
        required: [true, 'patient list is required']
    },
});

const schema_data = new mongoose.Schema({
    title: {   
        type: String,
        required: [true, 'title is required']
    },
    type: {   
        type: String,
        required: [true, 'type is required']
    },
    x: {   
        type: String,
        required: [true, 'x is required']
    },
    y: {   
        type: String,
        required: [true, 'y is required']
    },
    data: {   
        type: Array,
        required: [true, 'data list (int array) is required']
    },
    filter: {   
        type: String,
        required: [true, 'filter is required']
    },
});

// export module
module.exports.schema_provider = schema_provider;
module.exports.schema_plan = schema_plan;
module.exports.schema_data = schema_data;