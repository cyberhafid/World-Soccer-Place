import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Table, ListGroupItem } from 'reactstrap';
import './table.scss';

class ClassmentTrie extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.fetchMatch();
  }
  componentDidUpdate(){
    if(this.props.match.params.id !== this.state.league){
      this.fetchMatch();
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
          league: Leagueid
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { isLoading, competitions } = this.state;
    return (
      <React.Fragment>
        <ListGroupItem className="bg-list"><h2 className="title-tab">Classement</h2></ListGroupItem>
        <div>
          <Table id="table-1">
            <tbody>
              <tr>
                <td>Position</td>
                <td>Equipe</td>
                <td>Pts</td>
              </tr>
              {!isLoading ? (
                competitions.sort((a, b) =>  b.points - a.points).filter((competition, idx) => competition.comp_id == this.state.league && idx < 10 ).map((competition, idx) => {
                  const { team_name, points } = competition;
                  return (
                    <tr key={idx}>
                      <td className="bold"># {idx} </td>
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
export default withRouter(ClassmentTrie);
