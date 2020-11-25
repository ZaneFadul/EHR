// Define MongoDB documents
const mongoose = require("mongoose");

//mongoDB schemas
const org = require('../models/organizations');
const pat = require('../models/patient');
const presc = require('../models/prescription');
const med = require('../models/medication');
const user = require('../models/user');

const patient = mongoose.model('Patient', pat.schema_patient);
const organization = mongoose.model('Organization', org.schema_organization);
const prescription = mongoose.model('Prescription', presc.schema_prescription);
const medication = mongoose.model("Medication", med.schema_medication);
const ehr_user = mongoose.model('User', user.schema_user);

//set test medication
// const test_med = new med.medication("name", "desc", "dosage", ["side effects"]);

//create user document
function createUser(type, first_name, last_name, username, password, email, userID){
    return new ehr_user({
        type: type,
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password,
        email: email,
        userID: userID
    }).save()
};

//create patient document
function createPatient(name, birth_date, gender, address, allergies, disabilities, health_records, visitation_records, payment_records, appointments, healthcare_plans) { 
    return new patient({
        name: name,
        birth_date: birth_date,
        gender: gender,
        address: address,
        allergies: allergies,
        disabilities: disabilities,
        health_records: health_records,
        visitation_records: visitation_records,
        payment_records: payment_records,
        appointments: appointments,
        healthcare_plans: healthcare_plans
    }).save()
}

//create organization document
function createOrganization(name, type, info){
    return new organization({
        name: name,
        type: type,
        info: info
    }).save()
};

//create prescription document
function createPrescription(medications, date, description, start_date, end_date){
    return new prescription({
        medications: medications,
        date: date,
        description: description,
        start_date: start_date,
        end_date: end_date
    }).save()
};

//export functions
module.exports.createOrganization = createOrganization;
module.exports.createPatient = createPatient;
module.exports.createPrescription = createPrescription;
module.exports.createUser = createUser;