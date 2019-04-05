import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class MyTable_1 extends React.Component {
  render() {
    return (
      <Table id="table_1">
        <tbody>
          <tr>
            <td scope="row" className="direct span1">Direct •</td>
            <td className="span2">Otto</td>
            <td className="span3">1</td>
            <td className="span4 bold">VS</td>
            <td className="span5">0</td>
            <td className="span6">@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="direct">Direct •</td>
            <td>Thornton</td>
            <td>1</td>
            <td className="bold">VS</td>
            <td>0</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row" className="direct">Direct •</td>
            <td>the Bird</td>
            <td>3</td>
            <td className="bold">VS</td>
            <td>1</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">19H00</td>
            <td>the Bird</td>
            <td>-</td>
            <td className="bold">VS</td>
            <td>-</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td scope="row">19H00</td>
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