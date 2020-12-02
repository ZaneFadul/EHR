import React from "react";
import theme from "../Constants/theme";
import role_sidebars from '../Constants/role_sidebars';


const container_style = {
  height: "100%",
  width: "20%",
  borderRadius: "15px",
  margin: "10px",
  backgroundColor: 'black'
};

export default function Sidebar(props) {
  const sidebarInfo = role_sidebars[props.role];

  return (
    <div style={{
      height: '100%'
    }}>
      <ul className="card collection" style={container_style}>
        <li className="collection-item"></li>
        <li>
          <a
            href="/dashboard"
            className="collection-item"
            style={{
              height: '100%',
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
                  height:'100%',
                  color: `${theme.roleColors[props.role]["primary"]}`,
                  borderColor: `${theme.roleColors[props.role]["primary"]}`,
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
        <li className="collection-item" style={{ height: '50rem' }}></li>
        <li className="collection-item">Role: {props['role'].charAt(0).toUpperCase() + props['role'].slice(1)}</li>
      </ul>
    </div>
  );
}
