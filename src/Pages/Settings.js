import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./PageContainer.css";
import theme from "../Constants/theme";

export default function Appointments(props) {
  return (
    <div>
      <Header role="staff" />
      <Sidebar role="staff" active="Settings" />
      <div className="page-container">
        <div className="title-container">
          <h4>My Settings</h4>
        </div>
      </div>
    </div>
  );
}
