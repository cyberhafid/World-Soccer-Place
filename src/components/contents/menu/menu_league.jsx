import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class MenuLeague extends React.Component {
  render() {
    return (
      <div class="list-group">
        <ListGroup>
          <ListGroupItem className="bg-list"><h2 className="title-tab">League</h2></ListGroupItem>
          <Nav vertical>
            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/226.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink  to="/league/1221"> Ligue 1</NavLink></span>
            </ListGroupItem>
            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/227.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league/1005"> Ligue 2</NavLink></span>
            </ListGroupItem>
            <ListGroupItem>  <img width="30px" src="https://icons.footendirect.com/competition/s/normal/678.png" alt="index leaugue" ></img>
              <span class="titre-menu"> <NavLink to="/league"> Ligue des Champions</NavLink></span>     
            </ListGroupItem>
            <ListGroupItem>
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/234.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league?cp"> Coup de France</NavLink> </span>
            </ListGroupItem>
            <ListGroupItem>
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/551.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league?ID=1229"> LaLiga</NavLink></span>
            </ListGroupItem>
            <ListGroupItem> 
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/762.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league">Coup du Monde</NavLink></span>
            </ListGroupItem>
            <ListGroupItem>
              <img width="30px" src="https://img.icons8.com/nolan/2x/circled-chevron-down.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league"> Voir +</NavLink> </span>
            </ListGroupItem>
          </Nav>       
        </ListGroup>
      </div>
    );
  }
}

