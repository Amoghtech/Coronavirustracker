import React, { useState, useEffect } from 'react';
import {fetchdailydata} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = () => {
  const [dailydata, setdaily] = useState([]);

  useEffect(() => {
    /*created new function */
    const fetchapi = async () => {
      setdaily(await fetchdailydata());

    
    };
    fetchapi();
  },[]);

  const linechart = dailydata.length ? (
    <Line
    data={{
      labels: dailydata.map(({ date }) => new Date(date).toLocaleDateString()),
      datasets: [{
        data: dailydata.map((data) => data.confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
      }, {
        data: dailydata.map((data) => data.deaths),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },  {
        data: dailydata.map((data) => data.recovered),
        label: 'Recovered',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        fill: true,
      },
      ],
    }}
  />
  ) : null;
  return (
    <div className={styles.container}>
     {linechart }
    </div>
  );
};
export default Chart;
