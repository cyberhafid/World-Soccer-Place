import React from 'react';
import MatchOfDay from './match_of_day';
import Results from './results';
import UpcommingMatchs from './upcomming_matchs';

const MyTables = () =>
  <div>
    <h2 className="title-table">Matchs of the day</h2>
    <MatchOfDay />
    <h2 className="title-table">Results</h2>
    <Results />
    <h2 className="title-table">Upcoming matchs</h2>
    <UpcommingMatchs />
  </div>;

export default MyTables;