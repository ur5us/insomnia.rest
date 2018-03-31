const request = require('request');
const fs = require('fs');
const path = require('path');

const pathname = process.argv[2];

if (!pathname) {
  console.log('No pathname specified');
  process.exit(1);
}


(async function run () {
  const baremetricsData = await fetchBaremetrics();
  const gaData = await fetchGA();
  // fs.writeFileSync(pathname, `window.metrics = ${formattedBody}`);
})();

function fetchBaremetrics () {
  return new Promise((resolve, reject) => {

    const d = new Date();
    const endDate = [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()].map(n => (
      n.toString().length === 1 ? `0${n}` : n.toString()
    )).join('-');

    const options = {
      method: 'GET',
      url: 'https://api.baremetrics.com/v1/metrics',
      qs: {start_date: '2016-12-01', end_date: endDate},
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

function fetchGA () {

}
