import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
        <br></br>
          <Progressbarre />
        </div>
      </div>
    );
  }
}

export default App;
