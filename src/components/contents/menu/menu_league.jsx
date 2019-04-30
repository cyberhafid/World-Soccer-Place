import React from 'react';
import './menu.scss';
import { ListGroup, ListGroupItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class MenuLeague extends React.Component {
  render() {
    return (
      <div class="list-group">
        <ListGroup id="menu-img-league" className="menu-img">
          <ListGroupItem className="bg-list"><h2 className="title-tab">League</h2></ListGroupItem>
          <Nav vertical>
          
            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/226.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink  to="/league/1221"> Ligue 1</NavLink></span>
            </ListGroupItem>
            <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/678.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league/1005"> UEFA Champions League</NavLink></span>
            </ListGroupItem>
            <ListGroupItem>  <img width="30px" src="http://www.foot-direct.com/squelettes/img/competitions/70x70/18.png" alt="index leaugue" ></img>
              <span class="titre-menu"> <NavLink to="/league/1007"> UEFA Europa League</NavLink></span>     
            </ListGroupItem>
            <ListGroupItem>
              <img width="30px" src="https://www.matchendirect.fr/image/logo/competition/90/bundesliga-logo9.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league/1093">Bundesliga</NavLink> </span>
            </ListGroupItem>
            <ListGroupItem>
              <img width="30px" src="https://fr.metrotime.be/wp-content/uploads/2017/11/90202901_87782890.jpg" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"> <NavLink to="/league/1102"> Pro League</NavLink></span>
            </ListGroupItem>
            <ListGroupItem> 
              <img width="30px" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c3/EFL_Championship.svg/1200px-EFL_Championship.svg.png" alt="index leaugue" class="img-thumbnail"></img>
              <span class="titre-menu"><NavLink to="/league/1205">Championship</NavLink></span>
            </ListGroupItem>
          </Nav>       
        </ListGroup>
      </div>
    );
  }
}

