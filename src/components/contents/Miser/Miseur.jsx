import React from 'react';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import './mise.scss';
import { UserContext } from '../../../store/userProvider';
export default class Miseur extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      mises: [],
      versement: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData() {
    axios.get(`http://localhost:3000/users/${this.context.id}`)
      .then(res => {
        const mises = res.data.mises;
        const user = res.data;
        this.setState({
          mises,
          user
        });
      })
      .catch((err) => console.log(err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ solde: this.context.solde + parseInt(this.state.versement) }),
    };
    const url = `http://localhost:3000/users/${this.context.id}`;
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert('le champ panier doit etre non vide');
        } else {
          alert(`Montant enregistré sous le numero ${res.id}!`);
          this.fetchUserData();
          this.setState({ versement: '' });
        }
      }).catch(e => {
        console.error(e);
        alert('Votre CB ne sera pas debité ');
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="test">
          <div className="wrapper-day">

            <div className="table shadow-tab">
              <div className="row header yellow">
                <h2 className="title-tab">identity</h2>
              </div>
              <div className="table">
                <div className="row delete-respon" >
                  <div className="cell bold" data-title="Domicile">
                    <p>E-Mail</p></div>
                  <div className="cell bold" data-title="Domicile">
                    <p>Solde</p> </div>
                </div>
                <div className="row" >
                  <div className="cell bold" data-title="Email">
                    <p className="direct">{this.state.user.email}</p> </div>
                  <div className="cell bold" data-title="Solde">
                    <h2 className="direct">{this.state.user.solde}</h2> </div>
                </div>
              </div>
            </div>

            <div className="table shadow-tab">
              <div className="row header yellow">
                <h2 className="title-tab"> betting history</h2>
              </div>
              <div className="table">
                <div className="row delete-respon" >
                  <div className="cell bold" data-title="Matche N°">
                    <p className="direct">Matche N°</p> </div>
                  <div className="cell bold" data-title="Pari">
                    <p>Pari</p></div>
                  <div className="cell bold" data-title="Solde">
                    <p>Solde</p> </div>
                </div>
                {this.state.mises.map((mise, idx) => {
                  const { idmatch, pari, solde } = mise;
                  return (
                    <div className="row" key={idx}>
                      <div className="cell direct" data-title="Matche N°">
                        <p className="direct">{idmatch}</p> </div>
                      <div className="cell" data-title="Pari">
                        <p>{pari}</p>
                      </div>
                      <div className="cell" data-title="Solde">
                        <p>{solde}</p>
                      </div>
                    </div>
                  );
                })
                }

              </div>
            </div>

            <div className="table shadow-tab">
              <div className="row header yellow">
                <h2 className="title-tab">Wallet</h2>
              </div>
              <div className="table">
                <Form onSubmit={this.submitForm}>
                  <div className="row" >
                    <div className="cell size-cell1" data-title="">
                      <p className="direct">Add Amount</p>
                    </div>
                    <div className="cell" data-title="">
                      <input type="texte" id="versement" name="versement" onChange={this.onChange} value={this.state.versement} placeholder="Amount" />
                    </div>
                    <div className="cell size-cell2 padding-title" data-title="">
                      <Button type="submit" value="Envoyer" >Submit</Button>
                    </div>
                  </div>
                </Form>
              </div> </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

// GET /users => index [user1, user2, user3]
// GET /users/:id => show user1
// PUT /users/:id => update user1
// DELETE /users/:id => delete user1
// POST /users/create => create user