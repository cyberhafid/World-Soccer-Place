import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/table';
import MyFooter from './components/footer/containerFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container">
          <Progressbarre />
          <MyTable />
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
