import React from "react";
import theme from "../Constants/theme";
import Logo from "../Constants/logo_red.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="Header">
        <img
          src={Logo}
          alt="none"
          className="Header-logo"
          // style={{
          //   animationName: `logo-hover-${this.state.logoPop}`,
          //   animationDuration: "0.3s",
          //   animationTimingFunction: "ease-out",
          //   animationFillMode: "both",
          // }}
        />
        <a href="/login" className="logout">
          <i class="material-icons right">exit_to_app</i>
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
