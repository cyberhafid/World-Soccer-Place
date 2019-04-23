import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './table.css';

export default class ClassmentTrie extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null
  };

  getcompetitions() {

    axios
      .get('http://api.football-api.com/2.0/standings/1221?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')

      .then(response => {

        const competitions = response.data;
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

        <h2 className="title-table">Classement</h2>
        <div>
          <Table id="table-1">
            <tbody>
              <tr>
                <td>classement</td>
                <td>Equipe</td>
                <td>Pts</td>

              </tr>
              {!isLoading ? (
                competitions.sort((a, b) =>  b.points - a.points).filter((competition, idx) => competition.comp_id = '1221' && idx < '10' ).map((competition, idx) => {
                  const { team_name, position, points } = competition;
                  return (

                    <tr key={idx}>
                      <td className="bold">{position} </td>
                      <td className="bold"> {team_name}</td>

                      <td className="bold">{points} pts </td>

                    </tr>
                  );
                })
              ) : (<tr><td>Loading...</td></tr>)}
            </tbody>
          </Table>

        </div>
      </React.Fragment>
    );
  }
}

