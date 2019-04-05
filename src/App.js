import React, { Component } from 'react';
import './App.css';
import Progressbar from "./components/header/progressbar/progress"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid backg">
          <br></br>
          <Progressbar />
        </div>
      </div>
    );
  }
}

export default App;
