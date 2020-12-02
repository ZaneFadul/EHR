const mongoose = require('mongoose');
const Patient = mongoose.model('Patient',
  require('../../app/models/patient').schema_patient);

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index], new Date(), "M", "1234 Wallaby Way", ["Nut"], ["None"], ["None"], ["None"], ["None"], ["None"], ["None"]);
  }
}

async function createPatient(name, birth_date, gender, address, allergies, disabilities, health_records, visitation_records, payment_records, appointments, healthcare_plans) { 
    return await new Patient({
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

const mockPatient = jest.fn(patient => createPatient);

forEach(["Andrew", "Zane"], mockPatient);

test("Testing creation of new patient", () => {
  expect(mockPatient.mock.calls.length).toBe(2);
})