import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Matchresults extends React.Component {
  render() {
    return (
      <div class="list-group">
        <h3 className="title-table">Team</h3>
        <ListGroup>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/91.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu">  OM</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/93.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu"> PSG</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/136.png" alt="index team" ></img> <span class="titre-menu">  France</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/90.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu"> Lyon</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/50.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu"> Barcelone</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/97.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu"> Real Madrid</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/12.png" alt="index team" class="img-thumbnail"></img><span class="titre-menu"> Monaco</span></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
