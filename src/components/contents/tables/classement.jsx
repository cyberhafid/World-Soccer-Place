import React from 'react';
import { Table } from 'reactstrap';
import './table.css';

export default class ClassmentLigue extends React.Component {
  render() {
    return (
      <Table id="table_1">
        <tbody>
          <tr>
            <td> #</td>
            <td>Classement</td>
            <td>Pts</td>
            <td >Day</td>
            <td>Diff</td>
          </tr>
          <tr>
            <td className="bold"> #</td>
            <td>Classement</td>
            <td className="bold">Pts</td>
            <td className="bold">Day</td>
            <td className="direct">Diff</td>
          </tr>

        </tbody>
      </Table>


    );
  }
}
