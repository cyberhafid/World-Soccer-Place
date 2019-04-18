import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class MenuLeague extends React.Component {
  render() {
    return (
      <div class="list-group">
        <ListGroup>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/competition/s/normal/226.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu"> Ligue 1</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/227.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu">  Ligue 2</span></ListGroupItem>
          <ListGroupItem>  <img width="30px" src="https://icons.footendirect.com/competition/s/normal/678.png" alt="index leaugue" ></img><span class="titre-menu">   Ligue des Champions</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/234.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu"> Coup de France</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/551.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu"> LaLiga</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/762.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu"> Coup du Monde</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://img.icons8.com/nolan/2x/circled-chevron-down.png" alt="index leaugue" class="img-thumbnail"></img><span class="titre-menu"> Voir +</span></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

