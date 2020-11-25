import React, { Component } from 'react';
import theme from '../Constants/theme';
import './Header.css';
import Menu from './Menu';

export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      logoOn: false
    };
  }

  render() {
    return (
      <div className="Header" style={{
        borderColor : `${theme.roleColors[this.props.role]['primary']}`}}>
          <Menu />
      </div>
    );
  }
}

