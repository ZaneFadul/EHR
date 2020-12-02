import React, {Component} from "react";
import theme from "../Constants/theme";
import Logo from "../Constants/logo_red.svg";
import "./Header.css";
import { render } from "@testing-library/react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <img
            src={Logo}
            alt="none"
            className="Header-logo"
            href="%PUBLIC_URL%/"
            onClick={() => this.props.onClick('Dashboard')}
          />
          <a href="/login" className="logout">
            <i className="material-icons right">exit_to_app</i>
            <span>Logout</span>
          </a>
        </div>
        <hr
          style={{
            borderColor: `${theme.roleColors[this.props.role]["primary"]}`,
          }}
        ></hr>
      </div>
  );
  };
}
