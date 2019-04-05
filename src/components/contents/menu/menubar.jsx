import React from 'react';
import './menu.css';

import { ListGroup, ListGroupItem} from 'reactstrap';


export default class Menun extends React.Component {
  render() {
    return (
      <div class="list-group">
      <ListGroup >
     
        <ListGroupItem><img width="30px" src="https://icons.footendirect.com/competition/s/normal/226.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Ligue 1</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/227.png" alt="dd" class="img-thumbnail"></img><span class="titremenu">  Ligue 2</span></ListGroupItem>
        <ListGroupItem>  <img width="30px" src="https://icons.footendirect.com/competition/s/normal/678.png" alt="dd" ></img><span class="titremenu">   Ligue des Champions</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/234.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Coup de France</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/551.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> LaLiga</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/competition/s/normal/762.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Coup du Monde</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://img.icons8.com/nolan/2x/circled-chevron-down.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Voir +</span></ListGroupItem>
      </ListGroup>
</div>



    );
  }
}

