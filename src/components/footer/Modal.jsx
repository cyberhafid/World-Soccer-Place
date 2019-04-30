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
						Identité
	Association de défense des joueurs et parieurs
	Association loi 2019
	Préfecture de la Wild Code School
	Déclaration n°W313019183
	Email : Wild.Code@gmail.fr
	Hébergement
	Google Inc. 1 Place Francis Richard
	Le Patio - 13002
	France
	Téléphone : (+1) 650-253-0000
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