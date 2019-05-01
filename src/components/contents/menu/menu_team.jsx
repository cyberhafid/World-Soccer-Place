import React from 'react';
import './menu.css';
import { ListGroup, ListGroupItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class MenuLeague extends React.Component {
  render() {
    return (
      <div className="list-group">
        <ListGroup>
          <ListGroupItem className="bg-list"><h2 className="title-tab">Team</h2></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/91.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu">  OM</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/93.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu"> PSG</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/136.png" alt="index team" ></img> <span className="titre-menu">  France</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/90.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu"> Lyon</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/50.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu"> Barcelone</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/97.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu"> Real Madrid</span></ListGroupItem>
          <ListGroupItem><img width="30px" src="https://icons.footendirect.com/team/s/12.png" alt="index team" className="img-thumbnail"></img><span className="titre-menu"> Monaco</span></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}