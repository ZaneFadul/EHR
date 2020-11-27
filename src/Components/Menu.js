import React, { Component } from "react";
import Logo from "../Constants/logo_red.svg";
import "./Menu.css";

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoPop: false,
    };
    this.toggleLogoPop = this.toggleLogoPop.bind(this);
  }

  toggleLogoPop(prevProps, prevState) {
    if (this.state.logoPop === true) {
      this.setState({
        logoPop: false,
      });
    } else {
      this.setState({
        logoPop: true,
      });
    }
  }

  render() {
    return (
      <div className="Header-menu">
        {/* <button className="Header-menu-item">Dashboard</button>
        <button className="Header-menu-item">About</button> */}
        <img
          src={Logo}
          alt="none"
          className="Header-logo"
          onMouseOver={this.toggleLogoPop}
          onMouseOut={this.toggleLogoPop}
          style={{
            animationName: `logo-hover-${this.state.logoPop}`,
            animationDuration: "0.3s",
            animationTimingFunction: "ease-out",
            animationFillMode: "both",
          }}
        />
      </div>
    );
  }
}
