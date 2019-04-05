import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import MyButton from '../../shared/button';

export default class FormSignNav extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="emailSign">Email</Label>
          <Input type="email" name="email" id="emailSign" placeholder="Your pseudo
          " />
        </FormGroup>
        <FormGroup>
          <Label for="passwordSign">Password</Label>
          <Input type="password" name="password" id="passwordSign" placeholder="Your password" />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPasswordSign">Confirm Password</Label>
          <Input type="password" name="password" id="confirmPasswordSign" placeholder="Confirm your password" />
        </FormGroup>
        <MyButton 
                onClick={this.toggle}
                colorButton="primary"
                nameButton='SIGN IN'
                btnNavClass='btnNav'
                />{' '}
      </Form>
    );
  }
}