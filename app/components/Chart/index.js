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
    const gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, 'rgba(255, 244, 147, 1)'); // show this color at 100%
    gradient.addColorStop(1, 'rgba(232, 70, 88, 1)'); // show this color at 0%;
    const chart = new Chart(ctx, {
      type: nextProps.type,
      data: {
        ...nextProps.data,
        datasets: [{
          ...nextProps.data.datasets[0],
          backgroundColor: gradient,
        }],
      },
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
