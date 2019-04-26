import React from 'react';
import MatchOfDay from './match_of_day';
import Results from './results';
import UpcommingMatchs from './upcomming_matchs';

const MyTables = () =>
  <div>
    <MatchOfDay />
    <Results />
    <UpcommingMatchs />
  </div>;

export default MyTables;