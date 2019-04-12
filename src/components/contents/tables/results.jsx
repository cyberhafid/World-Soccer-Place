import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class Results extends React.Component {
  render() {
    return (
      <Table id="table-2">
        <tbody>
          <tr>
            <td className="finish toMarge-2">Finish</td>
            <td className="toMarge-3">Otto</td>
            <td className="toMarge-1">1</td>
            <td className="toMarge-1 bold">VS</td>
            <td className="toMarge-1">0</td>
            <td className="toMarge-3">@mdo</td>
          </tr>
          <tr>
            <td className="finish">Finish</td>
            <td>Thornton</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td className="finish">Finish</td>
            <td>the Bird</td>
            <td>2</td>
            <td className="bold">VS</td>
            <td>2</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td className="finish">Finish</td>
            <td>the Bird</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>2</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td className="finish">Finish</td>
            <td>the Bird</td>
            <td>3</td>
            <td className="bold">VS</td>
            <td>0</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}