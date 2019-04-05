import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyButton from '../../shared/button';
import FormLogNav from './formLog';

class ModalLog extends React.Component {
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
        <Button color="primary" className='modalNavbar' onClick={this.toggle}>{this.props.buttonLabel}</Button>
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
                btnNavClass='btnNav'
                />{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalLog;