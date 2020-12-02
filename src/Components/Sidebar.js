import React, {Component} from "react";
import theme from "../Constants/theme";
import { role_sidebarinfo } from '../Constants/role_sidebars';


const container_style = {
  height: "100%",
  width: "20%",
  borderRadius: "15px",
  margin: "10px",
  backgroundColor: 'black'
};

export default class Sidebar extends Component {
  render() {
    
  const sidebarInfo = role_sidebarinfo[this.props.role];

  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '50%'
    }}>
      <ul className="card collection" style={container_style}>
        <li className="collection-item"></li>
        <li>
          <a
            href="/dashboard"
            className="collection-item"
            style={{
              height: '10%',
              color: "white",
              backgroundColor: `${theme.roleColors[this.props.role]["primary"]}`,
            }}
          >
            Dashboard
          </a>
        </li>
        {sidebarInfo.map((item, index) => {
          return (
            <li key={index} className="collection-item" 
            style={{
              height:'10%',
              color: `${theme.roleColors[this.props.role]["primary"]}`,
              borderColor: `${theme.roleColors[this.props.role]["primary"]}`,
              }}
              onClick={() => this.props.onClick(item)}>
                {item}
            </li>
          );
        })}
        <li className="collection-item" style={{ height: '100%' }}></li>
        <li className="collection-item">Role: {this.props['role'].charAt(0).toUpperCase() + this.props['role'].slice(1)}</li>
      </ul>
    </div>
  );
  };
}