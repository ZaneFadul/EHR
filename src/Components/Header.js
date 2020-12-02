import React from "react";
import theme from "../Constants/theme";
import Logo from "../Constants/logo_red.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="Header">
        <a href="/dashboard">
          <img src={Logo} alt="none" className="Header-logo" />
        </a>
        <a href="/login" className="logout">
          <i className="material-icons right">exit_to_app</i>
          <span>Logout</span>
        </a>
      </div>
      <hr
        style={{
          borderColor: `${theme.roleColors[props.role]["primary"]}`,
        }}
      ></hr>
    </div>
  );
}
