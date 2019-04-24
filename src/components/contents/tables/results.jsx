import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './table.scss';

export default class Results extends React.Component {

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
        <div className="test">
          <div class="wrapper-result">
            <div class="table">
              <div class="row header green">
                <h2 className="title-tab">Result</h2>
              </div>
              <div className="table">
                {!isLoading ? (
                  competitions.filter(competition => competition.comp_id === '1221' && competition.localteam_score === '2').map((competition) => {
                    const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                    return (
                      <div className="row">
                        
                        <div className="cell direct" data-title="Diffusion">
                          <Link to={'/bet/' + id}><p className="finish">{formatted_date}</p></Link>
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
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

