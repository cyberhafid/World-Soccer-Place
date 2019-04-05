import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Menu3 extends React.Component {
  render() {
    return (
      <div class="list-group">
      <ListGroup>

    
        <ListGroupItem><img width="30px" src="http://flags.fmcdn.net/data/flags/h20/fr.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> France</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/gb.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Angleterre</span></ListGroupItem>
        <ListGroupItem>  <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/es.png" alt="dd" ></img><span class="titremenu">   Espagne</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/it.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Italie</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://m.media-amazon.com/images/I/21IBE9wSkiL._AC_UL320_.jpg" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Gilets Jaunes</span></ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/dz.png" alt="dd" class="img-thumbnail"></img><span class="titremenu"> Algerie</span></ListGroupItem>
   
        <ListGroupItem> <img width="30px" src="https://img.icons8.com/nolan/2x/circled-chevron-down.png" alt="dd" class="img-thumbnail"></img>Voir ++</ListGroupItem>
           </ListGroup>
</div>



    );
  }
}

