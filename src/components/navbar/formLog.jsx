import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import MyButton from '../shared/button';

export default class FormLogNav extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="emailLog">Email</Label>
          <Input type="email" name="email" id="emailLog" placeholder="Your pseudo
          " />
        </FormGroup>
        <FormGroup>
          <Label for="passwordLog">Password</Label>
          <Input type="password" name="password" id="passwordLog" placeholder="Your password" />
        </FormGroup>
        <MyButton 
                onClick={this.toggle}
                colorButton="primary"
                nameButton='LOG IN'
                btnNavClass='btnNav'
                />{' '}
      </Form>
    );
  }
}
