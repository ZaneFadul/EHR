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
import axios from "axios";

let mode = "lightMode";
let colorTheme = theme.mainColors[mode];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loggedIn: false,
      userID: null,
      userType: null
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (userData) => {
    
    return axios.post("http://localhost:8080/login", {
      userData
    }).then(response => {
      //user login success
      console.log(response);
      if(response.data != ""){
        console.log("LOGIN SUCCESS");
        this.setState({
          userID: response.data.userID,
          userType: response.data.type,
          loggedIn: true
        })
      }else{
        console.log("LOGIN ERROR");
      }
      console.log("USERID", this.state.userID,"USERTYPE", this.state.userType);
    }).catch((error)=>{
      console.log(error);
    })
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
              {this.state.loggedIn ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login
                  handleLogin={
                    this.handleLogin
                  }
                />
              )}
            </Route>
            <Route>
              <Register />
            </Route>
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
