import React from 'react';
import { Table } from 'reactstrap';
import './Team2.scss';
export default class Example extends React.Component {
  render() {
    return (
      <div className="nameTeam2">
        <Table className="team2" borderless>
          <thead>
            <tr>
              <th></th>
              <th className="titleTeam2">Team-2</th>
            </tr>
          </thead>
          <tbody className="nameTeam2">
            <tr>
              <th scope="row">1</th>
              <td>zizouuuuuuu</td>
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