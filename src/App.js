import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/navbar/navbar';
import Progressbarre from "./components/header/progressbarre/progressbarre"
<<<<<<< HEAD
//import Carousel1 from "./components/header/carousel/carousel"
import MyTables from './components/contents/tables/tables_container';
=======
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/table';
import MyFooter from './components/footer/containerFooter';

>>>>>>> 4c78b5e755260b77592fae56e0efba3f0f846e31

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
     
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
