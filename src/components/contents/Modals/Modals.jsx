import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
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

    this.modalEffect = React.createRef();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    const isWinner = Math.random() > 0.5;
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false,
      isWinner,
    });
    if(this.state.loading){
      setTimeout(() => {
        this.setState({ loading: false });
        const effectContainer = this.modalEffect.current;
        if (effectContainer && isWinner) {
          effectContainer.parentNode.parentNode.parentNode.classList.remove('effect2');
          effectContainer.parentNode.parentNode.parentNode.classList.add('effect');
        }else if(effectContainer && !isWinner) {
          effectContainer.parentNode.parentNode.parentNode.classList.remove('effect');
          effectContainer.parentNode.parentNode.parentNode.classList.add('effect2');
        }
      }, 6500);
    }
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    const resultTitle = this.state.isWinner ? 'YOU WIN' : 'YOU LOOSE';
    return (
      <div>
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
              <Input min={1} max={100} type="number" step="1" />
            </InputGroup><br />
            <Button color="primary" onClick={this.toggleNested}>BET</Button>
            {
              this.state.nestedModal && 
              <Modal onExit={() => this.setState({loading: true, nestedModal: false})} isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                <div ref={this.modalEffect}>
                  <ModalBody>
                    {
                      this.state.loading &&
                  <img className="gifBet" src="https://media.giphy.com/media/13bQxguhLJolC8/giphy.gif" alt="BetWin"></img>
                    }
                    {
                      !this.state.loading &&
                  <div className="win" id="loose"> <h2 class="clip-text animated">{resultTitle}</h2></div>
                    }
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                  </ModalFooter>
                </div>
              </Modal>
            }
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