import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Connex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigned: false,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>

        <Button color="primary" className='modal-navbar' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LOG IN   ZONE</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => this.submitForm(e)}>
              <FormGroup>
                <Label for="userMail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="userMail"
                  placeholder="Your pseudo"
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
                  placeholder="Your password"
                  onChange={(e) => this.onChange(e)}
                  value={this.state.pass}
                />
              </FormGroup>
              <Button type="submit" color="primary" className="btn-nav">Log in</Button>
      
            </Form>
          </ModalBody>
          <ModalFooter>
             <Button onClick={this.toggle} color="primary" className="btn-nav">CANCEL</Button>
           

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

