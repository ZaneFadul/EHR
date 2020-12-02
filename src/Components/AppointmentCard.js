import React from "react";

const appointmentCard = {
  textAlign: "left",
  margin: "15px",
};

export default function AppointmentCard(props) {
  return (
    <div className="col s12 m6">
      <div className="card" style={appointmentCard}>
        <div className="card-content">
          <span className="card-title">{props.info.name}</span>
          <p>Tel: {props.info.Tel}</p>
          <p>Email: {props.info.Email}</p>
          <p>Date: {props.info.date}</p>
          <p>Time: {props.info.time}</p>
        </div>
        <div className="card-action">
          <a
            className="red-text text-darken-3"
            href={"#appointment" + props.id}
          >
            MORE DETAILS
          </a>
        </div>
      </div>
    </div>
  );
}
