import React from "react";
import theme from "../Constants/theme";
import role_sidebars from '../Constants/role_sidebars';


const container_style = {
  width: "20%",
  borderRadius: "15px",
  margin: "10px",
};

export default function Sidebar(props) {
  const sidebarInfo = role_sidebars[props.role];

  return (
    <div>
      <ul className="card collection" style={container_style}>
        <li className="collection-item"></li>
        <li>
          <a
            href="/dashboard"
            className="collection-item"
            style={{
              color: "white",
              backgroundColor: `${theme.roleColors[props.role]["primary"]}`,
            }}
          >
            Dashboard
          </a>
        </li>
        {sidebarInfo.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="/patient"
                className="collection-item"
                style={{
                  color: `${theme.roleColors[props.role]["primary"]}`,
                  borderColor: `${theme.roleColors[props.role]["primary"]}`,
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
