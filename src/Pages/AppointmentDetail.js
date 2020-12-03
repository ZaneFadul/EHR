import React, { useState, useParams } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./PageContainer.css";
import theme from "../Constants/theme";

const AppointmentDetail = ({ match }) => {
  const {
    params: { appointmentid },
  } = match;
  return (
    <div>
      <Header role="staff" />
      <Sidebar role="staff" active="Appointments" />
      <div className="page-container">
        <div className="title-container">
          <h4>My Appointments</h4>
        </div>
        <div>{appointmentid}</div>
      </div>
    </div>
  );
};

export default AppointmentDetail;
