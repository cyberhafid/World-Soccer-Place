
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import ModalLog from './modalLog';
  import ModalSign from './modalSign';
  import './navbar.css';
  import logo from '../../../assets/img/logo.png';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" className="modalNavbar" light expand="md">
          <NavbarBrand href="/">
          <img src="https://i.ibb.co/MhQ35Pf/logo.png" height="50"></img>
          <p className="text-light titleNav">Api-Football</p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ModalLog
      
                buttonLabel='LOG IN'
                />
                
                
              </NavItem>
              <NavItem>
              <ModalSign
                buttonLabel='SIGN IN'
                
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}