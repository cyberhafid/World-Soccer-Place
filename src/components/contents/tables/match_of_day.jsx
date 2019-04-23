import React from 'react';
import { Table } from 'reactstrap';
import './table.scss';

export default class MatchOfDay extends React.Component {
  render() {
    return (
      <div className="test">
        <div className="wrapper">

          <div className="table">

            <div className="row header">
              <h2 className="title-tab">Match of Day</h2>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p>Direct</p>
                </div>
                <div className="cell" data-title="Domicile">
                  <p>Equipe 1 avec nom long</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>1</p>
                </div>
                <div className="cell" data-title="">
                  <p>VS</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>0</p>
                </div>
                <div className="cell" data-title="Location">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p>Direct</p>
                </div>
                <div className="cell" data-title="Domicile">
                  <p>Equipe 1 avec nom long</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>1</p>
                </div>
                <div className="cell" data-title="">
                  <p>VS</p>
                </div>
                <div className="cell" data-title="score">
                  <p>0</p>
                </div>
                <div className="cell" data-title="Location">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p>Direct</p>
                </div>
                <div className="cell" data-title="Domicile">
                  <p>Equipe 1 avec nom long</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>1</p>
                </div>
                <div className="cell" data-title="">
                  <p>VS</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>0</p>
                </div>
                <div className="cell" data-title="Location">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p>Direct</p>
                </div>
                <div className="cell" data-title="Domicile">
                  <p>Equipe 1 avec nom long</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>1</p>
                </div>
                <div className="cell" data-title="">
                  <p>VS</p>
                </div>
                <div className="cell" data-title="Score">
                  <p>0</p>
                </div>
                <div className="cell" data-title="exterior">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}