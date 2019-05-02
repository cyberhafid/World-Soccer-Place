import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import ModalLog from './modalLog';
import ModalSign from './modalSign';
import './navbar.scss';
import logo from '../../../assets/img/logo.png';
import ActiveUser from './activeUser';
import { UserConsumer } from '../../../store/userProvider';
import { Link, withRouter } from 'react-router-dom';

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
          <NavbarBrand onClick={() => this.props.history.push('/')}>
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
                      <Link to="/miseur"><span className='text-light' style={{ marginLeft: '35px' }}>Welcome {context.email}</span></Link>
                    );
                  } else {
                    return (
                      <Nav className="ml-auto" navbar>
                        <NavItem className="margin-button" media="screen">
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