import React from 'react';
import { Progress } from 'reactstrap';
import "./progress.css"


const Progressbar = (props) => {
    return (

            <div className="container bgprogress">
                <p className="text-progress text-center">Ligue 1<img className="App-logo" src="https://www.losc.fr/sites/default/files/styles/losc_style_default/public/terms/championnat/Logo-Ligue-1-Conforama_Vert_0.png?itok=b1PCx1Jh" height="100" width="100"></img></p>
                <Progress animated value={68} />
                <p className="text-progress text-center">LaLiga<img className="App-logo" src="https://supersport.azureedge.net/logos/football/tours/spanish-laliga.png?v=2019040217" height="100" width="100"></img></p>
                <Progress animated color="success" value="57" />
                <p className="text-progress text-center">Premier League<img className="App-logo" src="http://assets.stickpng.com/thumbs/5842fd88a6515b1e0ad75b3a.png" height="100" width="100"></img></p>
                <Progress animated color="warning" value={60} />
                <p className="text-progress text-center">Serie A<img className="App-logo" src="https://upload.wikimedia.org/wikipedia/fr/8/89/SerieALogo.png" height="100" width="100"></img></p>
                <Progress animated color="danger" value="65" />
            </div>

    );
};

export default Progressbar;