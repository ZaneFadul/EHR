import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AppointmentCard from "../Components/AppointmentCard";
import AddAppointmentModal from "../Components/AddAppointmentModal";
import theme from "../Constants/theme";

const availableTime;

export default function Appointments(props) {
  const [appointments, setAppointments] = useState([]);

  function addAppointment(newAppointment) {
    setAppointments((prev) => {
      return [...prev, newAppointment];
    });
  }

  return (
    <div>
      <Header role="staff" />
      <Sidebar role="staff" active="Appointments" />
      <div className="container">
        <div className="title-container">
          <h4>My Appointments</h4>
          <a
            className="btn-floating waves-effect red darken-3 addIcon modal-trigger"
            href="#modal2"
          >
            <i className="material-icons">add</i>
          </a>
        </div>

        <div className="row">
          {appointments.length === 0 && (
            <h6 style={{ margin: "40px" }}>
              You don't have any appointments yet.
            </h6>
          )}
          {appointments.map((item, index) => {
            return <AppointmentCard key={index} id={index} info={item} />;
          })}
        </div>
      </div>

      <AddAppointmentModal onAdd={addAppointment} />
    </div>
  );
}
