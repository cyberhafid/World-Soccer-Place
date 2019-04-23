import React from 'react';
import './table.scss';

export default class UpcommingMatchs extends React.Component {
  render() {
    return (
      <div className="test">
        <div class="wrapper">

          <div class="table">

            <div class="row header blue">
              <h2 className="title-tab">Match of Day</h2>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p className="date-blue">01.05.2019</p>
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
                <div className="cell" data-title="visitors">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p className="date-blue">01.05.2019</p>
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
                <div className="cell" data-title="visitors">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p className="date-blue">01.05.2019</p>
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
                <div className="cell" data-title="visitors">
                  <p>Equipe 2 avec nom long</p>
                </div>
              </div>

              <div className="row">
                <div className="cell direct" data-title="Diffusion">
                  <p className="date-blue">01.05.2019</p>
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