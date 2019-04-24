import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class MenuLeague extends React.Component {
  render() {
    return (
      <div class="list-group">
        <h3 className="title-table">League</h3>
        <ListGroup>
          <Nav vertical>
          
            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/226.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink  to="/league/1221"> Ligue 1</NavLink></span>
            </ListGroupItem>

            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/227.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league/1005"> UEFA Champions League</NavLink></span>
            </ListGroupItem>

            <ListGroupItem>  <img width="30px" src="https://icons.footendirect.com/competition/s/normal/678.png" alt="index leaugue" ></img>
              <span class="titre-menu"> <NavLink to="/league/1007"> UEFA Europa League</NavLink></span>     
            </ListGroupItem>

            <ListGroupItem>
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/234.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league/1093">Bundesliga</NavLink> </span>
            </ListGroupItem>

            <ListGroupItem>
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/551.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league/1102"> Pro League</NavLink></span>
            </ListGroupItem>

            <ListGroupItem> 
              <img width="30px" src="https://icons.footendirect.com/competition/s/normal/762.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league/1205">Championship</NavLink></span>
            </ListGroupItem>

          </Nav>       
       
        </ListGroup>
      </div>
    );
  }
}

