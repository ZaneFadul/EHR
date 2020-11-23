// Define JS class and MongoDB components for Patients

const mongoose = require("mongoose");

// Define Patients JS class

class Patient{
    constructor(id, birth_date, gender, address, allergies, disabilities, health_records, visitation_records, payment_records, appointments, healthcare_plans){
        this.id = id;
        this.birth_date = birth_date;
        this.gender = gender;
        this.address = address;
        this.allergies = allergies;
        this.disabilities = disabilities;
        this.health_records = health_records;
        this.visitation_records = visitation_records;
        this.payment_records = payment_records;
        this.appointments = appointments;
        this.healthcare_plans = healthcare_plans;
    }
    get all(){
        return [this.id, this.birth_date, this.gender, this.address, this.allergies, this.disabilities, this.health_records, this.visitation_records, this.payment_records, this. appointments, this.healthcare_plans];
    }
    get get_birth_date(){
        return this.birth_date;
    }
    get get_gender(){
        return this.gender;
    }
    get get_id(){
        return this.id;
    }
    get get_address(){
        return this.address;
    }
    get get_allergies(){
        return this.allergies;
    }
    get get_disabilities(){
        return this.disabilities;
    }
    get get_health_records(){
        return this.health_records
    }
    get get_visitation_records(){
        return this.visitation_records;
    }
    get get_payment_records(){
        return this.payment_records;
    }
    get get_appointments(){
        return this.appointments;
    }
    get get_healthcare_plans(){
        return this.healthcare_plans;
    }

}

// Define Patients MongoDB component

const schema_patient = new mongoose.Schema({
    name: {   
        type: String,
        required: [true, 'name is required']
    },
    birth_date: {   
        type: Date,
        required: [true, 'birth date is required']
    },
    gender: {   
        type: String,
        required: [true, 'gender is required']
    },
    address: {   
        type: String,
        required: [true, 'address is required']
    },
    allergies: {   
        type: Array,
        required: [true, 'allergies is required']
    },
    disabilities: {   
        type: Array,
        required: [true, 'disabilities is required']
    },
    health_records: {   
        type: Array,
        required: [true, 'health records is required']
    },
    visitation_records: {   
        type: Array,
        required: [true, 'visitation records is required']
    },
    payment_records: {   
        type: Array,
        required: [true, 'payment records is required']
    },
    appointments: {   
        type: Array,
        required: [true, 'appointments is required']
    },
    healthcare_plans: {   
        type: Array,
        required: [true, 'healthcare plans is required']
    }
});


// export module
module.exports.patient = Patient;
module.exports.schema_patient = schema_patient;