import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './Team1.scss';

export default class Example extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null,
    //this.state.teams1
  };

  getcompetitions() {
    axios
      .get(`http://api.football-api.com/2.0/team/${this.props.teamId}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)

      .then(response => {
        const competitions = response.data.squad;
        this.setState({
          competitions,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getcompetitions();
  }

  render() {
    const { isLoading, competitions } = this.state;
    return (

      <React.Fragment>

        <div className="nameTeam1">
          <Table className="team1" borderless>
            <thead>
          
              <tr>
                <th></th>
                <th className="titleTeam1">Team-1</th>
              </tr>
            </thead>
            <tbody className="nameTeam1">

              {!isLoading ? (

                competitions.filter(competition  =>  competition.comp_id = '1221').map((competition, idx  )=> {
 
                  const { id, name , age, position } = competition;
                  return (

                    <tr>

                      <th scope="row" key={id}>{id}</th>
                      <td>{name}</td>

                      <td>{age}</td>

                      <td>{position}</td>
                    </tr>

                  );
                })
              ) : (   <tr><td>Loading...</td></tr>  )}

            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}