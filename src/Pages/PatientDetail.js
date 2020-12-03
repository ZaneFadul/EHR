import React, { useState, useParams } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./PageContainer.css";
import theme from "../Constants/theme";

const PatientDetail = ({ match }) => {
  const {
    params: { patientid },
  } = match;
  return (
    <div>
      <Header role="staff" />
      <Sidebar role="staff" active="Patients" />
      <div className="page-container">
        <div className="title-container">
          <h4>My Patients</h4>
        </div>
        <div>{patientid}</div>
      </div>
    </div>
  );
};

export default PatientDetail;
