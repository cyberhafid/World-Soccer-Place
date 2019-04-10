import React, { Component } from 'react';
import './App.css';

import Chien from './components/contents/tables/CChien';

class App extends Component {
  render() {
    return (

         <div className="App">
          <Chien />

        <div>
         
        </div>
      </div>
    );
  }
}

export default App;


/*
import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/header/navbar/navbar';
import ProgressBar from "./components/header/progressbar/progress"
import Carousel1 from "./components/header/carousel/carousel"
import MyTable from './components/contents/tables/tables_container';
import MyFooter from './components/footer/containerFooter';
import Book from './components/contents/bookmaker/bookmaker'
import {Row, Col} from "reactstrap"
import Matchencours from "./components/contents/menu/menubar"
import Matchresults from "./components/contents/menu/menubar2"
import Matchupcomming from "./components/contents/menu/menubar3"
import ClassmentLigue from './components/contents/tables/classement';
import Chien from './components/contents/tables/CChien';

class App extends Component {
  render() {
    return (

         <div className="App">
          <Chien />
  <ClassmentLigue />

        <MyNavbar />
        <Carousel1 />
        <div className="container-fluid backg">
          <Matchencours />
           <Matchresults />
            <Matchupcomming />
          <ProgressBar />
          <MyTable />
          <Book />
          
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;
*/