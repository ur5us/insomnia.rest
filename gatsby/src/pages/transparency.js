import React from 'react';

import './transparency.less';
import baremetrics from '../assets/baremetrics.json';
import SocialCards from '../components/social-cards';
import Contributors from '../partials/contributors';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metrics: [],
      plans: [],
      totals: {},
    };
  }

  componentDidUpdate() {
    const {totals, metrics, plans} = this.state;

    const colors = {
      green: [60, 190, 0],
      blue: [20, 150, 255],
      red: [255, 0, 0],
      orange: [240, 120, 20],
      pink: [255, 120, 240],
      purple: [180, 20, 240],
      gray: [220, 200, 210]
    };
    const pageWidth = document.body.getBoundingClientRect().width;

    // Populate all stats boxes
    for (const key of Object.keys(totals)) {
      const el = document.querySelector('#stat-' + key);
      if (!el) {
        continue;
      }

      const type = el.getAttribute('data-type');
      if (type === 'money') {
        el.querySelector('div').innerHTML = '$' + addCommas(formatMoney(totals[key]).toFixed(0));
      } else {
        el.querySelector('div').innerHTML = addCommas(totals[key]);
      }
    }

    // Set color of stats boxes
    for (const el of document.querySelectorAll('.stats__stat')) {
      const color = el.getAttribute('data-color');
      el.style.backgroundColor = getColor(color, 0.05);
      el.style.borderColor = getColor(color, 0.7);
    }

    function getColor(name, alpha) {
      const color = colors[name] || [100, 200, 130];
      const a = typeof alpha === 'number' ? alpha : 1;
      return 'rgba(' + color.join(',') + ',' + a + ')';
    }

    function drawMetric(id, chartType, type, datasets) {
      const canv = document.getElementById('chart-' + id);

      // Doesn't matter what these widths are. ChartJS will resize
      // to fit container while maintaining the aspect ratio.
      canv.width = 5;
      canv.height = Math.max(pageWidth < 500 ? 5 : 3);

      new Chart(canv.getContext('2d'), {
        type: chartType || 'bar',
        data: {
          labels: metrics.map(item => item.label),
          datasets: datasets.map(set => ({
            label: set.label,
            data: metrics.map(
              item => type === 'money' ? formatMoney(item[set.key]) : item[set.key]
            ),
            backgroundColor: getColor(set.color, chartType === 'line' ? 0.05 : 0.7),
            borderColor: getColor(set.color, chartType === 'line' ? 0.9 : 0),
            pointBackgroundColor: getColor(set.color, 0.7),
            pointHoverBackgroundColor: getColor(set.color, 0.3),
            pointHoverBorderColor: getColor(set.color, 0.7),
            pointRadius: 2,
            borderWidth: 1,
            pointBorderColor: 'transparent'
          }))
        },
        options: {
          tooltips: {
            callbacks: {
              title: function (info, bar) {
                return bar.datasets[info[0].datasetIndex].label;
              },
              label: function (info) {
                return formatLabel(type, info.yLabel);
              }
            }
          },
          scales: {
            xAxes: [{
              barPercentage: 1,
              categoryPercentage: 0.75,
              ticks: {autoSkip: pageWidth < 500}
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function (value) {
                  return formatLabel(type, value, true);
                }
              }
            }]
          }
        }
      });
    }

    function drawPlansPie(id) {
      const canv = document.getElementById('chart-' + id);

      // Doesn't matter what these widths are. ChartJS will resize
      // to fit container while maintaining the aspect ratio.
      canv.width = 5;
      canv.height = Math.max(pageWidth < 500 ? 4 : 2);

      new Chart(canv.getContext('2d'), {
        type: 'pie',
        data: {
          labels: [
            'Plus / Mo',
            'Plus / Yr',
            'Teams / Mo',
            'Teams / Yr'
          ],
          datasets: [{
            data: [
              formatMoney(plans.plus.monthly),
              formatMoney(plans.plus.yearly),
              formatMoney(plans.team.monthly),
              formatMoney(plans.team.yearly),
            ],
            backgroundColor: [
              getColor('purple', 0.6),
              getColor('purple', 0.4),
              getColor('blue', 0.6),
              getColor('blue', 0.4),
            ],
            borderWidth: 0
          }]
        },
        options: {
          cutoutPercentage: 50,
          animation: {duration: 0},
          tooltips: {
            callbacks: {
              title: function (info, data) {
                let v = 'Insomnia ' + data.labels[info[0].index];
                v = v.replace('/ Mo', 'Monthly').replace('/ Yr', 'Annually');
                return v;
              },
              label: function (info, data) {
                return formatLabel('money', data.datasets[0].data[info.index]);
              }
            }
          }
        }
      });
    }

    drawMetric('money', 'line', 'money', [{
      key: 'mrr',
      label: 'MRR',
      color: 'blue'
    }, {
      key: 'net_revenue',
      label: 'Net Revenue',
      color: 'green'
    }, {
      key: 'ltv',
      label: 'Lifetime Value',
      color: 'purple'
    }]);

    drawMetric('customers', 'line', '', [{
      key: 'new_customers',
      label: 'New',
      color: 'pink'
    }, {
      key: 'cancellations',
      label: 'Cancelled',
      color: 'red'
    }]);

    drawMetric('churn', 'line', 'percent', [{
      key: 'revenue_churn',
      label: 'Revenue Churn',
      color: 'orange'
    }]);

    drawPlansPie('plans', 'money', [{
      key: 'mrr',
      label: 'Plus',
      color: 'purple'
    }]);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.src = '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';
    s.setAttribute('data-timestamp', Date.now());
    document.body.appendChild(s);
    s.addEventListener('load', () => {

      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      function printDate(yearMonthDay) {
        const parts = yearMonthDay.split(/[-/]/);
        const year = parts[0];
        const month = months[parts[1] - 1];
        const day = parts[2];
        return month + ' ' + day + ', ' + year;
      }

      const metrics = [];
      const totals = {
        mrr: 0,
        new_customers: 0,
        net_revenue: 0,
        fees: 0,
        cancellations: 0
      };

      let current = null;
      for (const item of baremetrics.metrics) {
        if (isFirstOfMonth(item.human_date)) {
          current && metrics.push(current);
          current = {
            new_customers: 0,
            net_revenue: 0,
            fees: 0,
            cancellations: 0,
            label: printDate(item.human_date)
          };
        }

        // Fixed values
        current.mrr = item.mrr;
        current.active_customers = item.active_customers;
        current.user_churn = item.user_churn;
        current.revenue_churn = item.revenue_churn;
        current.ltv = item.ltv;
        current.arpu = item.arpu;

        // Fixed totals
        totals.mrr = item.mrr;
        totals.ltv = item.ltv;
        totals.arpu = item.arpu;

        // Update monthly
        current.net_revenue += item.net_revenue;
        current.new_customers += item.new_customers;
        current.cancellations += item.cancellations;
        current.fees += item.fees;

        // Update totals
        totals.net_revenue += item.net_revenue;
        totals.new_customers += item.new_customers;
        totals.cancellations += item.cancellations;
        totals.fees += item.fees;
      }
      metrics.push(current);

      // Populate plan data
      const plans = {
        plus: {monthly: 0, yearly: 0},
        team: {monthly: 0, yearly: 0}
      };

      for (const item of baremetrics.plans.metrics) {
        if (item.plan.oid.includes('plus-monthly')) {
          plans.plus.monthly += item.value;
        } else if (item.plan.oid.includes('team-monthly')) {
          plans.team.monthly += item.value;
        } else if (item.plan.oid.includes('plus-yearly')) {
          plans.plus.yearly += item.value;
        } else if (item.plan.oid.includes('team-yearly')) {
          plans.team.yearly += item.value;
        }
      }

      this.setState({
        metrics: metrics,
        plans: plans,
        totals: totals
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <article className="container">
          <SocialCards title="Insomnia" summary="Sharing revenue, growth, and more" isBanner/>
          <header className="container header--big">
            <div className="row">
              <div className="col-12">
                <h1>Transparency</h1>
                <p>Sharing the Road to Insomnia</p>
              </div>
            </div>
          </header>

          <section className="content container">
            <div className="row">
              <div className="col-12">
                <p>
                  The purpose of this page is to give back to the indie hacker community by sharing the details of
                  Insomnia’s progress over time. For more details, visit the <a
                  href="https://insomnia.baremetrics.com/">Baremetrics
                  Dashboard</a> or read the <a href="https://www.indiehackers.com/product/insomnia">Indie Hackers
                  Interview</a>.
                </p>
                <h2>Summary</h2>
                <div className="stats">
                  <div className="stats__row">
                    <div className="stats__stat" id="stat-new_customers" data-color="purple" data-type="number">
                      <h2>All Customers</h2>
                      <div>...</div>
                    </div>
                  </div>
                  <div className="stats__row">
                    <div className="stats__stat" id="stat-net_revenue" data-color="green" data-type="money">
                      <h2>All Revenue</h2>
                      <div>...</div>
                    </div>
                    <div className="stats__stat" id="stat-mrr" data-color="green" data-type="money">
                      <h2>MRR</h2>
                      <div>...</div>
                    </div>
                    <div className="stats__stat" id="stat-ltv" data-color="green" data-type="money">
                      <h2>LTV</h2>
                      <div>...</div>
                    </div>
                    <div className="stats__stat" id="stat-arpu" data-color="green" data-type="money">
                      <h2>ARPU</h2>
                      <div>...</div>
                    </div>
                  </div>
                  <div className="stats__row">
                    {/*{{$stats: = getJSON "https://api.github.com/repos/getinsomnia/insomnia"}}*/}
                    {/*{{$u: = "https://api.github.com/repos/getinsomnia/insomnia/contributors"}}*/}
                    {/*{{$contributors: = getJSON $u}}*/}
                    <div className="stats__stat" data-color="blue">
                      <h2>Contributors</h2>
                      {/*<div>{{len $contributors}}</div>*/}
                    </div>
                    <div className="stats__stat" data-color="blue">
                      <h2>Issues</h2>
                      {/*<div>{{$stats.open_issues}}</div>*/}
                    </div>
                    <div className="stats__stat" data-color="blue">
                      <h2>Stars &#9734;</h2>
                      {/*<div>{{$stats.stargazers_count}}</div>*/}
                    </div>
                  </div>
                </div>
                <div>
                  <small>**All revenue numbers are in Canadian dollars</small>
                </div>

                <br/>
                <h2 id="plans">Plan Distribution</h2>
                <p>The following pie chart shows the MRR distribution between plans.</p>
                <canvas id='chart-plans'/>

                <br/>
                <h2 id="revenue">Revenue &#128176;</h2>
                <p>The following bar chart shows various revenue metrics since Insomnia's
                  beginnings.</p>
                <canvas id='chart-money'/>

                <br/>
                <h2 id="customers">Customers &#128188;</h2>
                <p>The following bar chart shows customer growth over time.</p>
                <canvas id='chart-customers'/>

                <br/>
                <h2 id="churn">Churn &#9760;</h2>
                <p>The following bar chart shows how many customers leave Insomnia.</p>
                <canvas id='chart-churn'/>
              </div>
            </div>
          </section>
        </article>
        <Contributors/>
      </React.Fragment>
    );
  }
}

function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function isFirstOfMonth(yearMonthDay) {
  return yearMonthDay.match(/\d{4}-\d{2}-01/);
}

function formatMoney(cents) {
  return cents / 100;
}

function formatLabel(type, value, small) {
  let suffix = '';
  let prefix = '';
  if (type === 'money' && value >= 1000 && small) {
    prefix = '$';
    suffix = 'k';
    value = Math.round(value / 1000);
  } else if (type === 'money') {
    prefix = '$';
  } else if (type === 'percent') {
    suffix = '%';
    value = value / 100;
  }

  return prefix + addCommas(value) + suffix;
}
