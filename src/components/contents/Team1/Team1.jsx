import React from 'react';
import { Table } from 'reactstrap';
import './Team1.scss';
export default class Example extends React.Component {
  render() {
    return (
      <div className="nameTeam1">
        <Table className="team1" borderless>
          <thead>
            <tr>
              <th></th>
              <th className="titleTeam1">Team-1</th>
            </tr>
          </thead>
          <tbody className="nameTeam1">
            <tr>
              <th scope="row">1</th>
              <td>Markdedededed</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}