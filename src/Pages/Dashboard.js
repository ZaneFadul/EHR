import React, { Component } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header role="patient" />
        <Sidebar role="patient" />
      </div>
    );
  }
}
