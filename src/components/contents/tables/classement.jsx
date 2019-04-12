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
      .get('http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')

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

        <h2 className="title-table">Random competition</h2>
        <div>
          <Table id="table-1">
            <tbody>
              <tr>
                <td> #</td>
                <td>Classement</td>
                <td>Pts</td>
                <td >Day</td>
                <td>Diff</td>
              </tr>
              {!isLoading ? (
                competitions.map(competition => {
                  const { id, name, region } = competition;
                  return (

                    <tr key={id}>
                      <td className="bold"> #{id}</td>
                      <td>{name}</td>
                      <td className="bold">{region}</td>
                      <td className="bold">Day</td>
                      <td className="direct">Diff</td>
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
