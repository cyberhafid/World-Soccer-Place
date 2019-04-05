import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Menu2 extends React.Component {
  render() {
    return (
      <div class="list-group">
      <ListGroup>

      
        <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/91.png" alt="dd" class="img-thumbnail"></img><span class="titremenu">  OM</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/team/s/93.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> PSG</span></ListGroupItem>
        <ListGroupItem>  <img width="30px" src="https://icons.footendirect.com/team/s/136.png" alt="dd" ></img> <span class="titremenu">  France</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/team/s/90.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Lyon</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/team/s/50.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Barcelone</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/team/s/97.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Real Madrid</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://icons.footendirect.com/team/s/12.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Monaco</span></ListGroupItem>
      </ListGroup>
</div>



    );
  }
}

