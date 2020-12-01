import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import PatientCard from "../Components/PatientCard";
import AddPatientModal from "../Components/AddPatientModal";
import theme from "../Constants/theme";
import "./Patients.css";

const patientInfo = [];

//{ name: "Alice Chen", Tel: "123445677", Email: "abc@xxx.com" },
// { name: "Bob Lee", Tel: "123445677", Email: "abc@xxx.com" },
// { name: "Tom Liu", Tel: "123445677", Email: "abc@xxx.com" },

export default function Patients(props) {
  const [patients, setPatient] = useState(patientInfo);

  function addPatient(newPatient) {
    setPatient((prev) => {
      return [...prev, newPatient];
    });
  }

  return (
    <div>
      <Header role="staff" />
      <Sidebar role="staff" active="Patients" />
      <div className="container">
        <div className="title-container">
          <h4>My Patients</h4>
          <a
            className="btn-floating waves-effect red darken-3 addIcon modal-trigger"
            href="#modal1"
          >
            <i className="material-icons">add</i>
          </a>
        </div>

        <div className="row">
          {patients.length === 0 && (
            <h6 style={{ margin: "40px" }}>You don't have any patient yet.</h6>
          )}
          {patients.map((item, index) => {
            return <PatientCard key={index} id={index} info={item} />;
          })}
        </div>
      </div>

      <AddPatientModal onAdd={addPatient} />
    </div>
  );
}
