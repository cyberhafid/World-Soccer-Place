import React from 'react';
import { Progress, Container } from 'reactstrap';
import './progress.scss';

const ProgressBar = (props) => {
  return (
    <Container className='border-div'>
      <div className="container bg-progress">
        <p className="text-center text-size-describe">the progress bar describes the progress of each league on the total matches to be played</p>
        <p className="text-progress text-center">Ligue 1 : <img className="App-logo" alt="progress-1" src="https://www.losc.fr/sites/default/files/styles/losc_style_default/public/terms/championnat/Logo-Ligue-1-Conforama_Vert_0.png?itok=b1PCx1Jh" height="50" width="50"></img></p>
        <Progress className="width-bar" animated value={68} />
        <p className="text-progress text-center">LaLiga: <img className="App-logo" alt="progress-2" src="https://supersport.azureedge.net/logos/football/tours/spanish-laliga.png?v=2019040217" height="50" width="50"></img></p>
        <Progress className="width-bar" animated color="success" value="57" />
        <p className="text-progress text-center">Premier League: <img className="App-logo" alt="progress-3" src="http://assets.stickpng.com/thumbs/5842fd88a6515b1e0ad75b3a.png" height="50" width="50"></img></p>
        <Progress className="width-bar" animated color="warning" value={60} />
        <p className="text-progress text-center">Serie A: <img className="App-logo" alt="progress-4" src="https://upload.wikimedia.org/wikipedia/fr/8/89/SerieALogo.png" height="50" width="50"></img></p>
        <Progress className="width-bar" animated color="danger" value="65" />
      </div>
    </Container>
  );
};

export default ProgressBar;