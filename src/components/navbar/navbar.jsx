
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import MyButton from '../shared/button';
  import './navbar.css';

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
        <Navbar color="light" color="warning" light expand="md">
          <NavbarBrand href="/">{/* logo */}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <MyButton 
                colorButton="primary"
                nameButton='Log In'
                btnNavClass='btnNav'
                />
              </NavItem>
              <NavItem>
                <MyButton 
                colorButton="primary"
                nameButton='Registration'
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}