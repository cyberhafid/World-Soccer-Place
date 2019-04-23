import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import League from './pages/League';
import Bet from './pages/Bet';
import Contact from './pages/Contact';
import MyNavbar from './components/header/navbar/navbar';
import MyFooter from './components/footer/containerFooter';

class App extends Component {
  render() {
    return (

      
      <BrowserRouter>
        <div className="App">
          <MyNavbar />
          <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/league" component={League} />
            <Route  path="/bet/:id" component={Bet} />
            <Route path="/contact" component={Contact} />
 
          </Switch>
          <MyFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

