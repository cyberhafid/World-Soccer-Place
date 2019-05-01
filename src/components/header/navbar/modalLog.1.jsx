import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyButton from '../../shared/button';
import FormLogNav from './formLog';
import { UserConsumer } from '../../../store/userProvider';

export default class ModalLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

        <Button color="primary" className='modal-navbar button-login' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <UserConsumer>
          {
            context => {
              if (context.isAuthentified) {
                return (
                  <Modal isOpen={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>LOG IN   ZONE</ModalHeader>
                    <ModalBody>
                      <FormLogNav />
                    </ModalBody>
                    <ModalFooter>
                      <MyButton
                        onClick={this.toggle}
                        colorButton="primary"
                        nameButton='CANCEL'
                        btnNavClass='btn-nav'
                      />
                    </ModalFooter>
                  </Modal>
                );
              } else {
                return (
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>LOG IN   ZONE</ModalHeader>
                    <ModalBody>
                      <FormLogNav />
                    </ModalBody>
                    <ModalFooter>
                      <MyButton
                        onClick={this.toggle}
                        colorButton="primary"
                        nameButton='CANCEL'
                        btnNavClass='btn-nav'
                      />
                    </ModalFooter>
                  </Modal>
                );
              }
            }
          }
        </UserConsumer>
      </div>
    );
  }
}

