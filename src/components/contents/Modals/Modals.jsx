import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, } from 'reactstrap';
import './Modals.scss';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      loading: true
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
    setTimeout(() => {
      this.setState({ loading: false });
      const effectContainer = document.getElementById('bet-effect-container');
      if(effectContainer){
        effectContainer.parentNode.classList.add('effect');
      }
    }, 6500);
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div className="modal-css">
        <Button color="secondary" onClick={this.toggle}>cotes{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Cotes</ModalHeader>
          <ModalBody>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend"> Money $</InputGroupAddon>
              <Input placeholder="100" readOnly />
            </InputGroup><br />
            <InputGroup>
              <InputGroupAddon addonType="prepend"> bet $</InputGroupAddon>
              <Input min={0} max={100} type="number" step="1" />
            </InputGroup><br />
            <Button color="primary" onClick={this.toggleNested}>BET</Button>
            <Modal id="bet-effect-container" isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalBody>
                {
                  this.state.loading &&
                  <img className="gifBet" src="https://media.giphy.com/media/13bQxguhLJolC8/giphy.gif" alt="BetWin"></img>
                }
                {
                  !this.state.loading &&
                  <div className="win"> <h2 class="clip-text animated">YOU WIN</h2></div>
                }
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Modal />
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;