import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import MyButton from '../../shared/button';
import axios from 'axios';

export default class FormSignNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigned: false,
      email: '',
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
    axios.post(url, this.state)
      .then((res) => {
        alert('Inscription réussie !');
        this.setState({ isSigned: true });
        this.props.toggle();
      })
      .catch((err) => {
        alert('Erreur lors de l\'ajout d\'un membre ');
        console.log(err);
      });
 
  }

  render() {
    return (
      <Form onSubmit={(e) => this.submitForm(e)}>
        <FormGroup>
          <Label for="userMail">Email</Label>
          <Input
            type="email"
            name="email"
            id="userMail"
            placeholder="Your pseudo"
            onChange={(e)=>this.onChange(e)}
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPass">Password</Label>
          <Input
            type="password"
            name="password"
            id="userPass"
            placeholder="Your password"
            onChange={(e)=>this.onChange(e)}
            value={this.state.pass}
          />
        </FormGroup>
        <MyButton  type="submit" colorButton="primary"
          className='btnNav' nameButton='SIGN IN'/>
      </Form>
    );
  }
}