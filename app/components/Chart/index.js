/**
*
* Chart
*
*/

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.scss';
import Chart from 'chart.js';

class Chartjs extends React.Component {
  constructor() {
    super();
    this.state = {
      chart: '',
    };
  }

  componentDidMount() {
    this.initializeChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const chart = this.state.chart;

    if (nextProps.redraw) {
      chart.destroy();
      this.initializeChart(nextProps);
    } else {
      nextProps.data.datasets.forEach((set, setIndex) => {
        const chartDataset = chart.data.datasets[setIndex];

        for (const property in set) { // eslint-disable-line no-restricted-syntax
          if (set.hasOwnProperty(property)) {
            chartDataset[property] = set[property];
          }
        }
      });

      chart.data.labels = nextProps.data.labels;

      chart.update();
    }
  }

  componentWillUnmount() {
    const chart = this.state.chart;
    chart.destroy();
  }

  initializeChart(nextProps) {
    const el = ReactDOM.findDOMNode(this);
    const ctx = el.getContext('2d');
    const chart = new Chart(ctx, {
      type: nextProps.type,
      data: nextProps.data,
      options: nextProps.options,
    });
    this.state.chart = chart;
  }

  render() {
    return (
      <canvas className={styles.chart} {...this.props}>
      </canvas>
    );
  }
}

export default Chartjs;
