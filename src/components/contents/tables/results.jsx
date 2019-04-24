
import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import {
  BrowserRouter as Router,
  withRouter,
  Link
} from 'react-router-dom';
import './table.css';

class Results extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        competitions: [],
        isLoading: true,
        errors: null,
       };
    }
    componentDidMount() {
      this.fetchMatch()
    }
    componentDidUpdate(){
      if(this.props.match.params.id !== this.state.lea){
        this.fetchMatch()
      }
    }


  fetchMatch() {
    const leagueId = this.props.match.params.id;
    axios
      .get(`http://api.football-api.com/2.0/matches?comp_id=${leagueId}&from_date=01.04.2019&to_date=25.04.2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)

      .then(response => {
        const competitions = response.data;
        this.setState({
          competitions,
          isLoading: false,
          lea: leagueId
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }



  render() {
    const { isLoading, competitions } = this.state;
    return (

      <React.Fragment>

        <div className="table table-striped table-condensed table-hover" >
          <Table id="table-2">
            <tbody>

              {!isLoading ? (

                competitions.filter(competition => competition.comp_id == this.state.lea && competition.localteam_score == '2').map((competition, idx) => {

                  const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                  return (

                    <tr>
                      <Link to={'/bet/' + id}><td className="finish toMarge-2" key={id}>{formatted_date}•</td></Link>
                      <td className="toMarge-3">{localteam_name}</td>
                      <td className="toMarge-1">{localteam_score}</td>
                      <td className="toMarge-1 bold">vs</td>
                      <td className="toMarge-1">{visitorteam_score}</td>
                      <td className="toMarge-3">{visitorteam_name}</td>
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

export default withRouter(Results)