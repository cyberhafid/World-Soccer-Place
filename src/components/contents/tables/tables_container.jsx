import React from 'react';
import MyTable_1 from './table_1';
import MyTable_2 from './table_2';
import MyTable_3 from './table_3';

const MyTables = () => <div>

  <div className="title_table">
    <h2 >Matchs of the day</h2>
    <MyTable_1/>
    </div>

    <div className="title_table">
    <h2 className="title_table">Results</h2>
    <MyTable_2/>
    </div>

    <h2 className="title_table">Upcoming matchs</h2>
    <MyTable_3/>
    </div>

  
  export default MyTables;