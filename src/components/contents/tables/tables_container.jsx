import React from 'react';
import MatchOfDay from './match_of_day';
import Results from './results';
import UpcommingMatchs from './upcomming_matchs';

const MyTables = () => <div>

  <div className="title_table">
    <h2 >Matchs of the day</h2>
    <MatchOfDay />
    </div>

    <div className="title_table">
    <h2 className="title_table">Results</h2>
    <Results/>
    </div>

    <h2 className="title_table">Upcoming matchs</h2>
    <UpcommingMatchs/>
    </div>

  
  export default MyTables;