import { NavLink } from 'react-router-dom';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu
} from 'reactstrap';
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
        <Navbar color="light" className="modal-navbar" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="footlogo" height="50"></img>
            <p className="text-light title-nav">Api-Football</p>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Navigation
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink className='nav-link' to="/"> Home </NavLink>
                <NavLink className='nav-link' to="/league"> League </NavLink>
                <NavLink className='nav-link' to="/bet"> Bet </NavLink>
                <NavLink className='nav-link' to="/contact"> Contact </NavLink>
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