import React, { Component } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

import RemediRecord from './DashboardPages/RemediRecord';

import './Dashboard.css';

const sidebar_to_comp = {
  'My Re-medi Health Record': <RemediRecord/>,
  'Appointments': 'Appointments',
  'Prescriptions': 'Prescriptions',
  'Medical Records': 'Records',
  'My Insurance Plan': 'InsurancePlan',
  'Settings': 'Settings',
  'Patients': 'Patients',
  'Messages': 'Messages',
  'Clients': 'Clients',
  'Dashboard': null
};
export default class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dashpagename: null,
      dashpage: this.props.dashpage === null || this.props.dashpage === undefined ? null : this.props.dashpage
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  handleClick(item) {
    const dashpage = sidebar_to_comp[item];
    console.log(`CLICKED ${item} and rendering to ${sidebar_to_comp[item]}`);
    this.setState({
      dashpagename: item,
      dashpage: dashpage,
    });
  }

  renderSwitch(dashpage) { 
    return dashpage === null ? <div className='dash-page' style={{color: '#CCCCCC'}}>Let's fill out some health forms!</div> : dashpage
  }

  render() {
    const role = this.props.role;
    return (
      <div className='dashboard'>
        <Header role={role} onClick={this.handleClick} />
        <div className='dash-content'>
          <Sidebar role={role} onClick={this.handleClick} selected={this.state.dashpagename}/>
          <div className='dash-page'>
            {this.renderSwitch(this.state.dashpage)}
          </div>
        </div>
        <Footer role={role} />
      </div>
    );
  }
}
