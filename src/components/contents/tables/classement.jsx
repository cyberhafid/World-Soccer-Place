import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import {
  BrowserRouter as Router,
  withRouter,
  Link
} from 'react-router-dom';
import './table.css';

class ClassmentTrie extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.fetchMatch()
  }
  componentDidUpdate(){
    if(this.props.match.params.id !== this.state.lea){
      this.fetchMatch()
    }
  }



  fetchMatch() {
    const Leagueid = this.props.match.params.id;
    axios
    .get(`http://api.football-api.com/2.0/standings/${Leagueid}?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)

      .then(response => {

        const competitions = response.data;
        this.setState({
          competitions,
          isLoading: false,
          lea: Leagueid
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
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
                competitions.sort((a, b) =>  b.points - a.points).filter((competition, idx) => competition.comp_id == this.state.lea && idx < 10 ).map((competition, idx) => {
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
export default withRouter(ClassmentTrie)
