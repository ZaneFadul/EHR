
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './Constants/theme';
import Header from './Components/Header';
import './App.css';

let mode = 'lightMode';
let colorTheme = theme.mainColors[mode];

class App extends Component {
state = {
  data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
      <div className="App" style={{
        background: `linear-gradient(${colorTheme['background-top-gradient']},${colorTheme['background-bottom-gradient']})`,
        color:`${colorTheme['main-text']}`
      }}>
        <Header role='patient'/>
        <p className="App-intro">{this.state.data}</p>
        </div>
      </Router>
    );
  }
}

export default App;