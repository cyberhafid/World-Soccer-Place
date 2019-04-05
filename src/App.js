import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
//import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"
import MyTables from './components/contents/tables/tables_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container">
         
          <MyTables />
        </div>
      </div>
    );
  }
}

export default App;
