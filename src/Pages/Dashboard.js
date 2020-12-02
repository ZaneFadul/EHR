import React, { Component } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
const role = "staff";

export default class Dashboard extends Component{
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header role={role} />
        <div style={{
          minHeight: '100px',
          flex: "1"
        }}>
          <Sidebar role={role} />
          {this.props.dashpage}
        </div>
        <Footer role={role} />
      </div>
    );
  }
}
