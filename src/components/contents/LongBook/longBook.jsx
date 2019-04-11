import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import './longBook.css'; 
export default class LongBook extends React.Component {
  render() {
    return (
      <Table  id="longBook" >
        <thead>        
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
            <th scope="row"><img width="55%" src="https://www.itiforums.com/beeiti/images/logos_societes/pmu.png" alt="Card longBookmaker" /></th>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="warning"className="buttonBook2">To register</Button></td>
          </tr>
          <tr>
            <th scope="row"><img width="55%" src="https://avantagebet.com/wp-content/uploads/2018/04/logo-betclic-1.jpg" alt="Card longBookmaker" /></th>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="warning"className="buttonBook2">To register</Button></td>
          </tr>
          <tr>
            <th scope="row"><img width="55%" src="https://y4f9x2y5.stackpathcdn.com/wp-content/uploads/2019/01/NetBet.png" alt="Card longBookmaker" /></th>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="warning"className="buttonBook2">To register</Button></td>
          </tr>
          <tr>
            <th scope="row"><img width="55%" src="https://www.wannabet.fr/wp-content/uploads/2017/08/zebet-300x133.png" alt="Card longBookmaker" /></th>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="secondary">cotes</Button>{' '}</td>
            <td><Button color="warning"className="buttonBook2">To register</Button></td>
          </tr>          
        </tbody>      
        </Table>
    );
  }
}
