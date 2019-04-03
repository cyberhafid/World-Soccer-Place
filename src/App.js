import React, { Component } from 'react';
import './App.css';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Navbar1 from "./components/header/navbar/navbar1"
import Carousel1 from "./components/header/carousel/carousel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />
        <Carousel1 />
        <div className="container">
          <Progressbarre />
        </div>
      </div>
    );
  }
}

export default App;
