// Define MongoDB documents
const mongoose = require("mongoose");

//mongoDB schemas
const org = require('../models/organizations');
const pat = require('../models/patient');
const presc = require('../models/prescription');
const med = require('../models/medication');
const user = require('../models/user');
const stf = require('../models/staff');
const insr = require('../models/insurance');
const records = require('../models/records');

const patient = mongoose.model('patients', pat.schema_patient, 'patients');
const organization = mongoose.model('organizations', org.schema_organization, "organizations");
const prescription = mongoose.model('prescriptions', presc.schema_prescription, 'prescriptions');
const medication = mongoose.model("medications", med.schema_medication, "medications");
const ehr_user = mongoose.model('users', user.schema_user, 'users');
const staff = mongoose.model('staff', stf.schema_staff, 'staff');
const insr_provider = mongoose.model('insurance providers', insr.schema_provider, 'insurance providers');
const insr_plan = mongoose.model('insurance plans', insr.schema_plan, 'insurance plans');
const insr_data = mongoose.model('insurance data', insr.schema_data, 'insurance data');
const record = mongoose.model('record', records.schema_record, 'record');
const appt_record = mongoose.model('appointment record', records.schema_appointment_record, 'appointment record');
const health_record = mongoose.model('health record', records.schema_health_record, 'health record');
const payment_record = mongoose.model('payment record', records.schema_payment_record, 'payment record');
const visit_record = mongoose.model('visitation record', records.schema_visitation_record, 'visitation record');





//set test medication
// const test_med = new med.medication("name", "desc", "dosage", ["side effects"]);

//create user document
function createUser(type, first_name, last_name, username, password, email, userID, parent_org, parent_id, permissions){
    return new ehr_user({
        type: type,
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: password,
        email: email,
        userID: userID,
        parent_org: parent_org,
        parent_id: parent_id,
        permissions: permissions
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

function createStaff(name, position, permissions, patients, appointments){
    return new staff({
        name: name,
        position: position,
        permissions: permissions,
        patients: patients,
        appointments: appointments
    }).save()
};

function createProvider(name, permissions, plans){
    return new insr_provider({
        name: name,
        permissions: permissions,
        plans: plans
    }).save()
};

function createPlan(name, type, provider, description, start_date, expiration_date, patients){
    return new insr_plan({
        name: name,
        type: type,
        provider: provider,
        description: description,
        start_date: start_date,
        expiration_date: expiration_date,
        patients: patients
    }).save()
};

function createAppointmentRecord(title, date, doctorID, patientID, description, time, duration){
    return new appt_record({
        title: title,
        date: date,
        doctorID: doctorID,
        patientID: patientID,
        description: description,
        time: time,
        duration: duration
    }).save()
};

function createHealthRecord(patientID, data){
    return new health_record({
        patientID: patientID,
        data: data
    }).save()
};

function createPaymentRecord(title, date, patientID, amount, vendor){
    return new payment_record({
        title: title,
        date: date,
        patientID: patientID,
        amount: amount,
        vendor: vendor
    }).save()
};

function createVisitationRecord(title, date, patientID, reason, issue){
    return new visit_record({
        title: title,
        date: date,
        patientID: patientID,
        reason: reason,
        issue: issue
    }).save()
};


//export functions
module.exports.createOrganization = createOrganization;
module.exports.createPatient = createPatient;
module.exports.createPrescription = createPrescription;
module.exports.createUser = createUser;
module.exports.createStaff = createStaff;
module.exports.createProvider = createProvider;
module.exports.createPlan = createPlan;
module.exports.createAppointmentRecord = createAppointmentRecord;
module.exports.createHealthRecord = createHealthRecord;
module.exports.createPaymentRecord = createPaymentRecord;
module.exports.createVisitationRecord = createVisitationRecord;



//export models
module.exports.model_patient = patient;
module.exports.model_organization = organization;
module.exports.model_prescription = prescription;
module.exports.model_medication = medication;
module.exports.model_user = ehr_user;
module.exports.model_staff = staff;
module.exports.model_insr_provider = insr_provider;
module.exports.model_insr_plan = insr_plan;
module.exports.model_insr_data = insr_data;
module.exports.model_record = record;
module.exports.model_appt_record = appt_record;
module.exports.model_health_record = health_record;
module.exports.model_payment_record = payment_record;
module.exports.model_visit_record = visit_record;
