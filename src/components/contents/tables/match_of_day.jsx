import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class MatchOfDay extends React.Component {
  render() {
    return (
      <Table id="table-1">
        <tbody>
          <tr>
            <td className="direct toMarge-2">Direct •</td>
            <td className="toMarge-3">Otto</td>
            <td className="toMarge-1">1</td>
            <td className="toMarge-1 bold">VS</td>
            <td className="toMarge-1">0</td>
            <td className="toMarge-3">@mdo</td>
          </tr>
          <tr>
            <td className="direct">Direct •</td>
            <td>Thornton</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>0</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td className="direct">Direct •</td>
            <td>the Bird</td>
            <td>3</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>19H00</td>
            <td>the Bird</td>
            <td>-</td>
            <td className="bold">VS</td>
            <td>-</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>19H00</td>
            <td>the Bird</td>
            <td>-</td>
            <td className="bold">VS</td>
            <td>-</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}