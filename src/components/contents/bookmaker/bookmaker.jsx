import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import "./bookmaker.css";
// import Image from 'react-bootstrap/Image'
export default class book extends React.Component {
  render() {
    return (
      <ListGroup className="book">
      <ListGroupItem className="titleBook"><strong>BOOKMAKERS</strong></ListGroupItem>
      <ListGroupItem><img width="30%" src="https://www.itiforums.com/beeiti/images/logos_societes/pmu.png" alt="Card image cap" /><strong> 20$ free </strong><Button color="warning"className="buttonBook">To register</Button></ListGroupItem>
      <ListGroupItem><img width="30%" src="https://avantagebet.com/wp-content/uploads/2018/04/logo-betclic-1.jpg" alt="Card image cap" /><strong> 20$ free </strong><Button color="warning" className="buttonBook">to Register</Button></ListGroupItem>
      <ListGroupItem><img width="30%" src="https://y4f9x2y5.stackpathcdn.com/wp-content/uploads/2019/01/NetBet.png" alt="Card image cap" /> <strong> 20$ free </strong>< Button color="warning" className="buttonBook">to Register</Button></ListGroupItem>
      <ListGroupItem><img width="30%" src="https://www.wannabet.fr/wp-content/uploads/2017/08/zebet-300x133.png" alt="Card image cap" /> <strong> 20$ free </strong> <Button color="warning" className="buttonBook">to Register</Button></ListGroupItem>
    </ListGroup>
    );
  }
}