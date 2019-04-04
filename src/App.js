import React, { Component } from 'react';
import './App.css';
import Progressbarre from "./components/header/progressbarre/progress"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid backg">
          <br></br>
          <Progressbarre />
        </div>
      </div>
    );
  }
}

export default App;
