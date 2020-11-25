import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleLogin}>Login</button>
        </div>
    );
  }
}

export default withRouter(Login);