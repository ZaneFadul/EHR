import React, { Component } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

import RemediRecord from './DashboardPages/RemediRecord';

import { sidebar_to_comp } from '../Constants/role_sidebars';
const role = "patient";

export default class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dashpage: this.props.dashpage === null || this.props.dashpage === undefined ? null : this.props.dashpage
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const dashpage = sidebar_to_comp[item];
    console.log(`CLICKED ${item} and rendering to ${sidebar_to_comp[item]}`);
    this.setState({ dashpage: `<${dashpage}/>` });
  }
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
          <Sidebar role={role} onClick={this.handleClick}/>
          <p>{this.state.dashpage === null ? "Let's fill out some health forms!" : this.props.dashpage}</p>
        </div>
        <Footer role={role} />
      </div>
    );
  }
}
