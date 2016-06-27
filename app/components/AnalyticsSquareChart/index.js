/**
*
* AnalyticsSquareChart
*
*/

import React from 'react';

import Card from 'components/Card';
import Chart from 'components/Chart';

import styles from './styles.scss';

const chartData = {
  labels: ["Red", "Blue", "Yellow"], // eslint-disable-line quotes
  datasets: [{
    label: '# of Votes',
    data: [3, 19, 3, 5, 2, 3],
    borderWidth: 0,
    pointRadius: 0,
  }],
};

const chartOptions = {
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
  },
  maintainAspectRatio: true,
  lineTension: 1,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }],
  },
};

function AnalyticsSquareChart() {
  return (
    <Card width={'30%'} height={240}>
      <div className={styles.title}>Match Like Ratio</div>
      <h1 className={styles.stat}>4.6</h1>
      <Chart type="line" data={chartData} options={chartOptions} />
    </Card>
  );
}


export default AnalyticsSquareChart;
