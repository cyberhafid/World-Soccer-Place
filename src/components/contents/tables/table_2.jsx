import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class MyTable_2 extends React.Component {
  render() {
    return (
      <Table id="table_2">
        <tbody>
          <tr>
            <td scope="row" className="finish">Finish</td>
            <td>Otto</td>
            <td>0</td>
            <td className="bold">VS</td>
            <td>0</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="finish">Finish</td>
            <td>Thornton</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="finish">Finish</td>
            <td>the Bird</td>
            <td>2</td>
            <td className="bold">VS</td>
            <td>2</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="finish">Finish</td>
            <td>the Bird</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>2</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="finish">Finish</td>
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