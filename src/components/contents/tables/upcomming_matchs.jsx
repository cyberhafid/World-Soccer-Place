import React from 'react';
import axios from 'axios';
import './table.scss';
import {
  withRouter,
  Link
} from 'react-router-dom';

class UpcommingMatchs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      league: 0,
      competitions: [],
      isLoading: true,
      errors: null,
    };
  }

  componentDidMount() {
    this.fetchMatch();
  }
  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.league) {
      this.fetchMatch();
    }
  }

  fetchMatch() {
    const leagueId = this.props.match.params.id;
    axios
      .get(`http://api.football-api.com/2.0/matches?comp_id=${leagueId}&from_date=15.05.2019&to_date=15.07.2019&Authorization=${process.env.REACT_APP_API_KEY}`)

      .then(response => {
        const competitions = response.data;
        this.setState({
          competitions,
          isLoading: false,
          league: leagueId
        });
      })
      .catch(error => this.setState({ error, isLoading: false, league: leagueId }));
  }
  render() {
    const { isLoading, competitions } = this.state;
    return (
      <React.Fragment>
        <div className="contain-tab">
          <div className="wrapper-up">
            <div className="table">
              <div className="row header blue">
                <h2 className="title-tab">Upcoming Match</h2>
              </div>
              <div className="table">
                {!isLoading ? (

                  competitions.filter((competition, idx) => competition.comp_id === this.state.league && idx < 10).map((competition, idx) => {

                    const { id, formatted_date, localteam_name, visitorteam_name, localteam_score, visitorteam_score } = competition;
                    return (
                      <div className="row" key={idx}>
                        <div className="cell direct" data-title="Diffusion">
                          <Link to={'/bet/' + id}><p className="date-blue">{formatted_date}</p></Link>
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
                ) : (<p>Loading...</p>)}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(UpcommingMatchs);