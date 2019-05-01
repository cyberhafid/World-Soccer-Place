import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './Modals.scss';
import { UserContext } from '../../../store/userProvider';

class ModalExample extends React.Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      loading: true,
      bet: 0
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
      bet: 0
    });
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
        const effectContainer = this.modalEffect.current;
        if (effectContainer && isWinner) {
          effectContainer.parentNode.parentNode.parentNode.classList.remove('effect2');
          effectContainer.parentNode.parentNode.parentNode.classList.add('effect');
        } else if (effectContainer && !isWinner) {
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

  closeAll() {
    this.setState({
      nestedModal: false,
      modal: false,
      closeAll: true,
      bet: 0
    });
  }

  runBet = () => {
    if (this.state.bet <= this.context.solde && this.context.solde !== 0) {
      this.context.updateContextField('solde', this.props.solde - this.state.bet);
      const mise = {
        'startDate': new Date(),
        'idmatch': this.props.matchId,
        'pari': this.state.bet,
        'solde': this.props.solde - this.state.bet
      };
      let mises = this.context.mises;
      mises.push(mise);
      const user = {
        email: this.context.email,
        solde: this.props.solde - this.state.bet,
        mises: [...mises]
      };
      this.context.updateUserProfile(this.context.id, user);
    } else {
      alert('Vous n\'avez pas assez de crédit !');
      return this.closeAll();
    }
    this.toggleNested();
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
              <Input placeholder={this.context.solde} readOnly />
            </InputGroup><br />
            <InputGroup>
              <InputGroupAddon addonType="prepend"> bet $</InputGroupAddon>
              <Input min={1} value={this.state.bet} onChange={(e) => this.setState({ bet: parseInt(e.target.value) })} max={100} type="number" step="1" />
            </InputGroup><br />
            <Button color="primary" onClick={this.runBet}>BET</Button>
            {
              this.state.nestedModal &&
              <Modal onExit={() => this.setState({ loading: true, nestedModal: false })} isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
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