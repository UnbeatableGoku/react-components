import React, { useState } from 'react';
import BarChart from '../components/BarChart';
import Chart from '../components/Chart';

const ChartPage = () => {
  const [toggelChart, setToggleChart] = useState(true);
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button
          onClick={() => setToggleChart(true)}
          style={
            toggelChart
              ? { backgroundColor: 'black', color: 'white', padding: '10px' }
              : { padding: '10px' }
          }
        >
          First Chart
        </button>
        <button
          style={
            toggelChart
              ? { padding: '10px' }
              : { backgroundColor: 'black', color: 'white', padding: '10px' }
          }
          onClick={() => setToggleChart(false)}
        >
          Second Chart
        </button>
      </div>
      {toggelChart ? <Chart /> : <BarChart />}
    </>
  );
};

export default ChartPage;
