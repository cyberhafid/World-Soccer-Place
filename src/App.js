import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import League from './pages/League';
import Bet from './pages/Bet';
import Contact from './pages/Contact';
import MyNavbar from './components/header/navbar/navbar';
import MyFooter from './components/footer/containerFooter';
import { userContextData, UserProvider } from './store/userProvider';
import Axios from 'axios';
import Miseur from './components/contents/Miser/Miseur';
import Presentation from './pages/Presentation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...userContextData,
      updateContextField: this.updateContextField,
      updateUserProfile: this.updateUserProfile
    };
  }

  updateContextField = (field, value) => {
    this.setState({ [field]: value });
  }

  updateUserProfile = (userId, datas) => {
    Axios.patch(`http://localhost:3000/users/${userId}`, datas)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
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
              <Route path="/miseur" component={Miseur} />
              <Route path="/presentation/:id" component={Presentation} />
            </Switch>
            <MyFooter />
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
export default App;

