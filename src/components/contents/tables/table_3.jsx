import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class MyTable_3 extends React.Component {
  render() {
    return (
      <Table id="table_3">
        <tbody>
          <tr>
            <td scope="row">Tuesday, March 10</td>
            <td>Otto</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>3</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">Tuesday, March 10</td>
            <td>Thornton</td>
            <td>2</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">Tuesday, March 10</td>
            <td>the Bird</td>
            <td>0</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">Tuesday, March 10</td>
            <td>the Bird</td>
            <td>0</td>
            <td className="bold">VS</td>
            <td>0</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">Tuesday, March 10</td>
            <td>the Bird</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>3</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}