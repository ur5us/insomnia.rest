const request = require('request');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const assets = 'src/assets';
const static = 'static';

/** Returns last day of last month in YYYY-MM-DD format */
function endDate () {
  const d = new Date();
  d.setUTCDate(-1); // Reset to last day of last month
  return [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()].map(n => (
    n.toString().length === 1 ? `0${n}` : n.toString()
  )).join('-');
}

(async function run () {
  const baremetricsData = await fetchBaremetrics();
  const planData = await fetchPlans();
  const changelog = generateChangelog();
  const metricsBody = JSON.stringify({
    metrics: baremetricsData.metrics,
    plans: planData
  }, null, '\t');

  const contributors = await fetchContributors();
  const contributorsBody = JSON.stringify(contributors, null, '\t');
  const changelogBody = JSON.stringify(changelog, null, '\t');

  fs.writeFileSync(path.join(assets, 'baremetrics.json'), metricsBody);
  fs.writeFileSync(path.join(assets, 'contributors.json'), contributorsBody);
  fs.writeFileSync(path.join(static, 'changelog-json.html'), changelogBody);

  console.log('Wrote metrics to ' + assets);
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

function fetchContributors () {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.github.com/repos/getinsomnia/insomnia/contributors',
      headers: {'User-Agent': `insomnia/website`}
    };

    request(options, function (err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Plans request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  });
}

function generateChangelog () {
  const root = path.join(__dirname, '..', 'content', 'changelog');
  const items = [];
  for (const name of fs.readdirSync(root)) {
    const p = path.join(root, name);
    if (path.extname(p) !== '.md') {
      continue;
    }
    const content = fs.readFileSync(p, 'utf8');
    const frontmatter = matter(content).data;
    items.push({
      version: frontmatter.slug,
      channel: frontmatter.channel || 'stable',
      link: frontmatter.link || null,
      major: frontmatter.major || [],
      minor: frontmatter.minor || [],
      fixes: frontmatter.fixes || [],
    });
  }
  return items;
}
