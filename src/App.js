import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
import ProgressBar from "./components/header/progressbar/progress"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
          <br></br>
          <ProgressBar />
          <MyTable />
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
