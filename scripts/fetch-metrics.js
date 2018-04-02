const request = require('request');
const fs = require('fs');
const path = require('path');

const pathname = process.argv[2];

/** Returns last day of last month in YYYY-MM-DD format */
function endDate () {
  const d = new Date();
  d.setUTCDate(-1); // Reset to last day of last month
  return [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()].map(n => (
    n.toString().length === 1 ? `0${n}` : n.toString()
  )).join('-');
}


if (!pathname) {
  console.log('No pathname specified');
  process.exit(1);
}


(async function run () {
  const baremetricsData = await fetchBaremetrics();
  const planData = await fetchPlans();
  const body = JSON.stringify({
    metrics: baremetricsData.metrics,
    plans: planData
  }, null, '\t');
  fs.writeFileSync(pathname, `window.__metrics = ${body}`);
  console.log('Wrote metrics to ' + pathname);
})();

function fetchBaremetrics () {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.baremetrics.com/v1/metrics',
      qs: {start_date: '2016-12-01', end_date: endDate()},
      headers: {'Authorization': `Bearer ${process.env.BAREMETRICS_KEY}`}
    };

    request(options, function (err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Metrics request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  })
}

function fetchPlans () {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.baremetrics.com/v1/metrics/mrr/plans',
      qs: {start_date: endDate(), end_date: endDate()},
      headers: {'Authorization': `Bearer ${process.env.BAREMETRICS_KEY}`}
    };

    request(options, function (err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Plans request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  });
}
