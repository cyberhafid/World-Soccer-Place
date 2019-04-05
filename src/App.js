import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
import ProgressBar from "./components/header/progressbar/progress"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';
import Menu1 from "./components/contents/menu/menubar"
import Menu2 from "./components/contents/menu/menubar2"
import Menu3 from "./components/contents/menu/menubar3"

class App extends Component {
  render() {
    return (
         <div className="App">
        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
          <Menu1 />
           <Menu2 />
            <Menu3 />
          <ProgressBar />
          <MyTable />
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
