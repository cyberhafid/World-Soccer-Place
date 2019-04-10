
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
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
          <img src={logo} height="50"></img>
          <p className="text-light titleNav">Api-Football</p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Navigation
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink activeClassName='selected' exact to="/"> Home </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink activeClassName='selected' to="/league"> League </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink activeClassName='selected' to="/bet"> Bet </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink activeClassName='selected' to="/contact"> Contact </NavLink>
                  </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

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