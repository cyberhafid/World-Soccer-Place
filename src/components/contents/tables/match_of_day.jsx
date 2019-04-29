import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './table.scss';

const Child = ({ match }) => (
  <div>
    {match.params.id}
  </div>
);

export default class MatchOfDay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      isLoading: true,
      errors: null,

    };
  }
  
  getcompetitions() {

    axios
      .get('http://api.football-api.com/2.0/matches?from_date=10.04.2019&to_date=15.04.2019&Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76')
      .then(response => {
        const competitions = response.data;
        this.setState({
          competitions,
          isLoading: false,
         
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
      <Router>
        <React.Fragment>
          <div className="test">
            <div className="wrapper-day">
              <div className="table">
                <div className="row header">
                  <h2 className="title-tab">Match of Day</h2>
                </div>
                <div className="table">
                  {!isLoading ? (
                    competitions.filter((competition, idx) => competition.comp_id = '1221' && idx < '10').map((competition, idx) => {
                      const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                      return (
                        <div className="row" key={idx}>
                          <div className="cell direct" data-title="Diffusion">
                            <Link to={'/bet/' + id}><p className="direct">{formatted_date}</p></Link>
                          </div>
                          <div className="cell" data-title="Domicile">
                            <p>{localteam_name}</p>
                          </div>
                          <div className="cell" data-title="Score">
                            <p>{localteam_score}</p>
                          </div>
                          <div className="cell" data-title="">
                            <p>VS</p>
                          </div>
                          <div className="cell" data-title="Score">
                            <p>{visitorteam_score}</p>
                          </div>
                          <div className="cell" data-title="exterior">
                            <p>{visitorteam_name}</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (<tr><td>Loading...</td></tr>)}
                  <Route path={'/league/:id'} component={Child} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

