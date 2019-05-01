import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import './navbar.scss';
import logo from '../../../assets/img/logo.png';
import ActiveUser from './activeUser';
import { UserConsumer } from '../../../store/userProvider';
import { Link, withRouter } from 'react-router-dom';
import Inscription from './login/inscription';
import Connex from './login/connex';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthentified: false,
      email: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const className = !this.state.isAuthentified ? 'toShow' : 'toHide';
    return (
      <div>
        <Navbar color="light" className="modal-navbar" light expand="md">
          <NavbarBrand onClick={() => this.props.history.push('/league/1221')}>
            <img src={logo} alt="footlogo" height="50"></img>
            <p className="text-light title-nav">World Soccer Place</p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <UserConsumer>
              {
                context => {
                  if (context.isAuthentified) {
                    return (
                      <Link to="/miseur"><span className='text-light' style={{ marginLeft: '35px' }}>`Bonjour {context.email}`</span></Link>
                    );
                  } else {
                    return (
                      <Nav className="ml-auto" navbar>
                        <NavItem className="margin-button" media="screen">
                          <Connex
                            buttonLabel='LOG IN'
                          />
                        </NavItem>
                        <NavItem>

                          <Inscription
                            buttonLabel='SIGN IN'
                          />
                        </NavItem>
                      </Nav>
                    );
                  }
                }
              }
            </UserConsumer>
          </Collapse>
          <ActiveUser
            className={className}
            activeUser={this.state.email}
          />
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavbar);