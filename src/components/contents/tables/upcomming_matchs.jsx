import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './table.css';
import { Link } from 'react-router-dom';

export default class UpcommingMatchs extends React.Component {

  state = {
    competitions: [],
    isLoading: true,
    errors: null
  };

  getcompetitions() {

    axios
      .get('http://api.football-api.com/2.0/matches?from_date=05.04.2019&to_date=15.04.2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')

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
        <div className="table table-striped table-condensed table-hover" >
          <Table id="table-3">
            <tbody>

              {!isLoading ? (

                competitions.filter(competition => competition.comp_id == '1221' && competition.localteam_score > '2').map((competition, idx) => {

                  const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                  return (

                    <tr>
                      <Link to={'/bet/' + id}><td className="toMarge-2" key={id}>{formatted_date} •</td></Link>
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

