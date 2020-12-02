import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import theme from "./Constants/theme";
import "./App.css";

//Import Pages
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Register";
import Patients from "./Pages/Patients";
import Appointments from "./Pages/Appointments";

let mode = "lightMode";
let colorTheme = theme.mainColors[mode];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log("Logged in.");
    this.setState({ loggedIn: true });
  }
  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/test");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            background: `linear-gradient(${colorTheme["background-top-gradient"]},${colorTheme["background-bottom-gradient"]})`,
            color: `${colorTheme["main-text"]}`,
          }}
        >
          <Switch>
            <Route exact path="/">
              {this.state.loggedIn ? <Redirect to="/dashboard" /> : <About />}
            </Route>
            <Route path="/dashboard">
              {/* {this.state.loggedIn ? <Dashboard /> : <Redirect to="/login" />} */}
              <Dashboard />
            </Route>
            <Route path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login
                  handleLogin={() => {
                    this.handleLogin();
                    <Redirect to="/dashboard" />;
                  }}
                />
              )}
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/patients">
              <Patients />
            </Route>
            <Route path="/appointments">
              <Appointments />
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
