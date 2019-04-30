import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './containerFooter.scss';

class ModalMyFooter extends React.Component {
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
        <i className="margin-icon fas fa-3x fa-balance-scale" onClick={this.toggle}><p>{this.props.buttonLabel}Legal Mentions</p></i>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 500 }} backdropTransition={{ timeout: 1000 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modal-footer-header bg-warning" toggle={this.toggle}>Legal Mentions</ModalHeader>
          <ModalBody>
            Identity Association of the defense of the players and punters
           Association law 2019 Prefecture of the Wild Code School
           Declaration n ° W313019183
           Email: Wild.Code@gmail.fr
           Hosting Google Inc. 1 Place Francis Richard The Patio - 13002 France
           Telephone: (1) 650- 253-0000
          </ModalBody>
          <ModalFooter>
            <Button className="text-black" color="warning" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalMyFooter;