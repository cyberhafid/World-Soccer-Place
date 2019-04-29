import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import League from './pages/League';
import Bet from './pages/Bet';
import Contact from './pages/Contact';
import MyNavbar from './components/header/navbar/navbar';
import MyFooter from './components/footer/containerFooter';
import {userContextData, UserProvider} from './store/userProvider';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      ...userContextData,
      updateContextField: this.updateContextField
      // email: userContextData.email
    };
  }

  updateContextField = (field, value) => {
    this.setState({[field]: value});
  }

  render() {
    return (
      <BrowserRouter>
        <UserProvider value={this.state}>
          <div className="App">
            <MyNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/league/:id" component={League} />
              <Route path="/bet/:id" component={Bet} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <MyFooter />
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
export default App;

