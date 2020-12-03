import React, { Component } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import DashboardCard from "../Components/DashboardCard";
import "./PageContainer.css";

const dashboardInfo = {};

const buttonstyle = {
  margin: "10px 0",
  width: "200px",
};

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header role="staff" />
        <Sidebar role="staff" active="Dashboard" />
        <div className="page-container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>

          <div style={{ display: "flex", marginTop: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "30px",
              }}
            >
              <a
                class="waves-effect waves-light btn-large red darken-2"
                style={buttonstyle}
                href="/patients"
              >
                Add Patient
              </a>
              <a
                class="waves-effect waves-light btn-large red darken-2"
                style={buttonstyle}
                href="/appointments"
              >
                Add Appointment
              </a>
              <a
                class="waves-effect waves-light btn-large red darken-2"
                style={buttonstyle}
                href="/drugs"
              >
                Find Medicine
              </a>
              <a
                class="waves-effect waves-light btn-large red darken-2"
                style={buttonstyle}
                href="/settings"
              >
                View Profile
              </a>
            </div>
            <div style={{ backgroundColor: "yellow" }}>
              here supposed to be a line chart for visit records.......
            </div>
          </div>
        </div>
      </div>
    );
  }
}
