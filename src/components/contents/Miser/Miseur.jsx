import React from 'react';
import axios from 'axios';
import { Button, Form } from 'reactstrap';
import './mise.scss';
export default class Miseur extends React.Component {

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
    axios.get('http://localhost:3000/users/2')
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
    let currentMise = this.state.mises;
    currentMise.mises.push({
      'startDate': new Date(),
      'idmatch': 'quelMatch',
      'versement': this.state.versement,
      'pari': this.state.mise
    });
    
    {/*this.state.users.push({
      "solde": this.state.versement
    })*/}

    this.setState({mises: [...currentMise]});
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.user),
    };
    const url = 'http://localhost:3000/users/2';
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert('le champ panier doit etre non vide');
        } else {
          alert(`Montant enregistré sous le numero ${res}!`);
          this.fetchUserData();
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

            <div className="table">
              <div className="row header yellow">
                <h2 className="title-tab">identity</h2>
              </div>
              <div className="table">
                <div className="row" >
                  <div className="cell bold" data-title="Diffusion">
                    <p>Nom Prenom</p> </div>
                  <div className="cell bold" data-title="Domicile">
                    <p>E-Mail</p></div>
                  <div className="cell bold" data-title="Domicile">
                    <p>Solde</p> </div>
                </div>
                <div className="row" >
                  <div className="cell bold" data-title="Diffusion">
                    <p className="direct">{this.state.user.username}</p> </div>
                  <div className="cell bold" data-title="Diffusion">
                    <p className="direct">{this.state.user.mail}</p> </div>
                  <div className="cell bold" data-title="Diffusion">
                    <h2 className="direct">{this.state.user.solde}</h2> </div>
                </div>
              </div>
            </div>

            <div className="table">
              <div className="row header yellow">
                <h2 className="title-tab"> betting history</h2>
              </div>
              <div className="table">
                <div className="row" >
                  <div className="cell bold" data-title="Diffusion">
                    <p className="direct">Matche N°</p> </div>
                  <div className="cell bold" data-title="Domicile">
                    <p>Versement</p></div>
                  <div className="cell bold" data-title="Domicile">
                    <p>Solde</p> </div>
                </div>
                {this.state.mises.map((mise, idx) => {
                  const { idmatch, versement, pari } = mise;
                  return (
                    <div className="row" key={idx}>
                      <div className="cell direct" data-title="Diffusion">
                        <p className="direct">{idmatch}</p> </div>
                      <div className="cell" data-title="Domicile">
                        <p>{versement}</p>
                      </div>
                      <div className="cell" data-title="Domicile">
                        <p>{pari}</p>
                      </div>
                    </div>
                  );
                })
                }

              </div>
            </div>

            <div className="table">
              <div className="row header yellow">
                <h2 className="title-tab">portefeuille</h2>
              </div>
              <div className="table">
                <Form onSubmit={this.submitForm}>
                  <div className="row" >
                    <div className="cell direct" data-title="Diffusion">
                      <p className="direct">Montant a ajouter</p>                </div>
                    <input type="texte" id="versement" name="versement" onChange={this.onChange} value={this.state.versement} placeholder="Mise" />
                    <div className="cell" data-title="Domicile">      <Button type="submit" value="Envoyer" >Submit</Button>   </div>
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