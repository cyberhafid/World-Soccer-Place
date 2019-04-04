import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"
import Menuv from "./components/menu/menubar"
import Tableaut from "./components/menu/tableau"

import { library } from './assets/fonts/@fortawesome/font@fortawesome/fontawesome-svg-core';
import { faEnvelope, faTruck, faKey, faBomb } from './assets/fonts/@fortawesome/free-solid-svg-icons';



library.add(faEnvelope, faTruck, faBomb,  faKey);




class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />

        
        <div className="container">
          <Progressbarre />
          <Menuv />
          <Tableaut />



        </div>
      </div>
    );
  }
}

export default App;
