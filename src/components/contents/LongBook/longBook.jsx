import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import './LongBook.scss';
import Modals from '../Modals/Modals';
import { UserContext } from '../../../store/userProvider';

export default class LongBook extends Component {
  static contextType = UserContext

  constructor(props) {
    super(props);

    this.state = {
      mises: [],
      solde: 0
    };
  }

  componentDidMount() {
    this.fetchUserDatas();
  }

  fetchUserDatas() {
    this.setState({
      mises: [...this.context.mises],
      solde: this.context.solde
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.solde !== this.context.solde) {
      this.fetchUserDatas();
    }
  }

  render() {
    return (
      <Table id="longBook" >
        <thead className="longBook2">
          <tr>
            <th><strong>Bookmakers</strong></th>
            <th><strong>1</strong></th>
            <th><strong>N</strong></th>
            <th><strong>2</strong></th>
            <th className="bonusOffered"><strong>Bonus offered</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="logLogo"><img width="55%" src="https://www.itiforums.com/beeiti/images/logos_societes/pmu.png" alt="Card longBookmaker" /></th>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td><Button color="warning" className="buttonBook2" href="https://www.pmu.fr/ouverture/?typeCompte=2010&clientApi=1&redirectionUrl=https://www.pmu.fr&codePromo=SPORT&univers=S" target="_blank">Register</Button></td>
          </tr>
          <tr>
            <th scope="row" className="logLogo"><img width="55%" src="https://avantagebet.com/wp-content/uploads/2018/04/logo-betclic-1.jpg" alt="Card longBookmaker" /></th>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td><Button color="warning" className="buttonBook2" href="https://en.betclic.com/register" target="_blank">Register</Button></td>
          </tr>
          <tr>
            <th scope="row" className="logLogo"><img width="55%" src="https://y4f9x2y5.stackpathcdn.com/wp-content/uploads/2019/01/NetBet.png" alt="Card longBookmaker" /></th>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td><Button color="warning" className="buttonBook2" href="https://www.netbet.fr/inscription" target="_blank">Register</Button></td>
          </tr>
          <tr>
            <th scope="row" className="logLogo"><img width="55%" src="https://www.wannabet.fr/wp-content/uploads/2017/08/zebet-300x133.png" alt="Card longBookmaker" /></th>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals matchId={this.props.matchId} solde={this.state.solde} /></td>
            <td className="logLogo2"><Modals solde={this.state.solde} /></td>
            <td><Button color="warning" className="buttonBook2" href="https://www.zebet.fr/fr/inscription?gclid=CjwKCAjwwZrmBRA7EiwA4iMzBM59RsNiY1OKOtja5vbtLbgz0Y-EHr6xjDVoewJSYb5V4c4s5SspsRoCf08QAvD_BwE" target="_blank">Register</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}