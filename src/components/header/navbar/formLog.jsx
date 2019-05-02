import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import MyButton from '../../shared/button';
import axios from 'axios';
import { UserContext } from '../../../store/userProvider';

export default class FormLogNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentified: false,
      email: 'Enter your email',
      password: '',
    };
    this.onChange = this.onChange;
    this.submitForm = this.submitForm;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/users';
    axios.get(url)
      .then((res) => {
        const emails = res.data.map((user) => user.email.toLowerCase());
        if (emails.includes(this.state.email.toLowerCase())) {
          const index = emails.indexOf(this.state.email.toLowerCase());
          if (res.data[index].password.toString().toLowerCase() === this.state.password.toLowerCase()) {
            this.setState({ isAuthentified: true });
            this.context.updateContextField('email', res.data[index].email);
            this.context.updateContextField('isAuthentified', true);
            this.context.updateContextField('solde', res.data[index].solde);
            this.context.updateContextField('mises', res.data[index].mises);
            this.context.updateContextField('id', res.data[index].id);
          } else {
            alert('wrong password');
          }
          
        } else {
          alert('wrong email');
        }
        
      })
      .catch((err) => {
        alert('error occurs');
        console.log(err);
      });

  }

  render() {
    const className = !this.state.isAuthentified ? 'toShow' : 'toHide';
    // To use localStorage:
    //  localStorage.setItem('userAuthentified', JSON.stringify({
    //    'isAuthentified': this.state.isAuthentified,
    //    'email': this.state.email,
    //    'className': `${className}`
    //  }));
    return (
      <div>
        <Form onSubmit={(e) => this.submitForm(e)} className={className}>
          <FormGroup>
            <Label for="userMail">Email</Label>
            <Input
              type="email"
              name="email"
              id="userMail"
              
              onChange={(e) => this.onChange(e)}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPass">Password</Label>
            <Input
              type="password"
              name="password"
              id="userPass"
              
              onChange={(e) => this.onChange(e)}
              value={this.state.password}
            />
          </FormGroup>
          <MyButton type="submit" colorButton="primary"
            btnNavClass='btn-nav-log' nameButton='LOG IN' />
        </Form>
        {/* To use localStorage:
          <ActiveUser
          activeUser={this.state.email}
        /> */}
      </div>
    );
  }
}

FormLogNav.contextType = UserContext;