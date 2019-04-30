import React from 'react';
import { Button } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './bookmaker.css';
// import Image from 'react-bootstrap/Image'
export default class Book extends React.Component {
  render() {
    return (
      <ListGroup className="book">
        <ListGroupItem className="title-book"><strong>BOOKMAKERS</strong></ListGroupItem>
        <ListGroupItem><img width="30%" src="https://www.itiforums.com/beeiti/images/logos_societes/pmu.png" alt="bookmaker-1" /><strong className="bookText"> 20$ free </strong><Button color="warning" className="button-book"  href="https://www.pmu.fr/ouverture/?typeCompte=2010&clientApi=1&redirectionUrl=https://www.pmu.fr&codePromo=SPORT&univers=S" target="_blank">Register</Button></ListGroupItem>
        <ListGroupItem><img width="30%" src="https://avantagebet.com/wp-content/uploads/2018/04/logo-betclic-1.jpg" alt="bookmaker-2" /><strong className="bookText"> 20$ free </strong><Button color="warning" className="button-book" href="https://en.betclic.com/register" target="_blank">Register</Button></ListGroupItem>
        <ListGroupItem><img width="30%" src="https://y4f9x2y5.stackpathcdn.com/wp-content/uploads/2019/01/NetBet.png" alt="bookmaker-3" /> <strong className="bookText"> 20$ free </strong>< Button color="warning" className="button-book" href="https://www.netbet.fr/inscription" target="_blank">Register</Button></ListGroupItem>
        <ListGroupItem><img width="30%" src="https://www.wannabet.fr/wp-content/uploads/2017/08/zebet-300x133.png" alt="bookmaker-4" /> <strong className="bookText"> 20$ free </strong> <Button color="warning" className="button-book" href="https://www.zebet.fr/fr/inscription?gclid=CjwKCAjwwZrmBRA7EiwA4iMzBM59RsNiY1OKOtja5vbtLbgz0Y-EHr6xjDVoewJSYb5V4c4s5SspsRoCf08QAvD_BwE" target="_blank">Register</Button></ListGroupItem>
      </ListGroup>
    );
  }
}