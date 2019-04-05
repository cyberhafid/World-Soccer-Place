import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Menu3 extends React.Component {
  render() {
    return (

      <ListGroup>
        <ListGroupItem><img width="30px" src="http://flags.fmcdn.net/data/flags/h20/fr.png" alt="dd" class="img-thumbnail"></img> France</ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/gb.png" alt="dd" class="img-thumbnail"></img>Angleterre</ListGroupItem>
        <ListGroupItem>  <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/es.png" alt="dd" ></img>  Espagne</ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/it.png" alt="dd" class="img-thumbnail"></img>Italie</ListGroupItem>
        <ListGroupItem> <img width="30px" src="https://m.media-amazon.com/images/I/21IBE9wSkiL._AC_UL320_.jpg" alt="dd" class="img-thumbnail"></img>Gilets Jaunes</ListGroupItem>
        <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/dz.png" alt="dd" class="img-thumbnail"></img>Algerie</ListGroupItem>
   
        <ListGroupItem> Voir ++</ListGroupItem>
           </ListGroup>




    );
  }
}

