const request = require('request');
const fs = require('fs');

const pathname = process.argv[2];

if (!pathname) {
  console.log('No pathname specified');
  process.exit(1);
}

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
  const formattedBody = JSON.stringify(JSON.parse(body), null, '\t');
  fs.writeFileSync(pathname, `window.metrics = ${formattedBody}`);
  if (response.statusCode !== 200) {
    throw new Error('Metrics request failed: ' + response.body);
  }
  console.log(`Metrics written to ${pathname}`)
});
