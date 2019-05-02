import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import LogoClub from './logoclub/LogoClub';
import './vsbanner.scss';

export default class VsBanner extends Component {
  render() {
    return (
      <Container className="css-banner">
        <h2 className="titleMatch">Match</h2>
        <div className="soccer-place box">
          <LogoClub className="position-logo img-ballon-bet" url="https://boutique.foot.fr/7271-thickbox_default/ballon-nike-hypervenom-rouge.jpg" />
        </div>
      </Container >
    );
  }
}
