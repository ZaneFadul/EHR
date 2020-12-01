import React from "react";
import theme from "../Constants/theme";

// excluding "Dashboard"
const sidebarInfo = [
  ["Dashboard", false],
  ["Patients", false],
  ["Appointments", false],
  ["Messages", false],
  ["Drugs", false],
  ["Settings", false],
];

const container_style = {
  position: "absolute",
  width: "20%",
  borderRadius: "15px",
  margin: "50px 15px",
};

export default function Sidebar(props) {
  switch (props.active) {
    case "Dashboard":
      sidebarInfo[0][1] = true;
      break;
    case "Patients":
      sidebarInfo[1][1] = true;
      break;
    case "Appointments":
      sidebarInfo[2][1] = true;
      break;
    case "Messages":
      sidebarInfo[3][1] = true;
      break;
    case "Drugs":
      sidebarInfo[4][1] = true;
      break;
    case "Settings":
      sidebarInfo[5][1] = true;
      break;
    default:
  }

  return (
    <div>
      <ul className="card collection" style={container_style}>
        <li className="collection-item"></li>
        {sidebarInfo.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={"/" + item[0].toLowerCase()}
                className="collection-item"
                style={
                  item[1]
                    ? {
                        color: "white",
                        backgroundColor: `${
                          theme.roleColors[props.role]["primary"]
                        }`,
                      }
                    : {
                        color: `${theme.roleColors[props.role]["primary"]}`,
                      }
                }
              >
                {item[0]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
