import React, { Component } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

import RemediRecord from './DashboardPages/RemediRecord';

import './Dashboard.css';

const role = "patient";

const sidebar_to_comp = {
  'My Re-medi Health Record': <RemediRecord/>,
  'Appointments': 'Appointments',
  'Prescriptions': 'Prescriptions',
  'Medical Records': 'Records',
  'My Insurance Plan': 'InsurancePlan',
  'Settings': 'Settings',
  'Patients': 'Patients',
  'Messages': 'Messages',
  'Clients': 'Clients'
};
export default class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dashpage: this.props.dashpage === null || this.props.dashpage === undefined ? null : this.props.dashpage
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  handleClick(item) {
    const dashpage = sidebar_to_comp[item];
    console.log(`CLICKED ${item} and rendering to ${sidebar_to_comp[item]}`);
    this.setState({ dashpage: dashpage });
  }

  renderSwitch(dashpage) { 
    return dashpage === null ? "Let's fill out some health forms!" : dashpage
  }

  render() {
    return (
      <div className='dashboard'>
        <Header role={role} />
        <div className='dash-content'>
          <Sidebar role={role} onClick={this.handleClick} />
          <div className='dash-page'>
            {this.renderSwitch(this.state.dashpage)}
          </div>
        </div>
        <Footer role={role} />
      </div>
    );
  }
}
