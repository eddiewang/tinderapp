/*
 *
 * AnalyticsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAnalyticsPage from './selectors';
import styles from './styles.scss';

import Sidebar from 'components/Sidebar';
import AppWrap from 'components/AppWrap';
import DashboardHeading from 'components/DashboardHeading';
import Card from 'components/Card';
import Chart from 'components/Chart';
import AnalyticsOverview from 'components/AnalyticsOverview';


const chartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // eslint-disable-line quotes
  datasets: [{
    label: '# of Votes',
    data: [3, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
  }],
};

const chartOptions = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
};

class AnalyticsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.dashboardPage}>
        <Sidebar />
        <AppWrap>
          <DashboardHeading>Analytics</DashboardHeading>
          <AnalyticsOverview />
          <Card width={800} height={500}>
            <Chart type="bar" data={chartData} options={chartOptions} />
          </Card>
        </AppWrap>
      </div>
    );
  }
}

const mapStateToProps = selectAnalyticsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);
