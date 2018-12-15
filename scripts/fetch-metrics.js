const request = require('request');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const moment = require('moment');

const dirAssets = 'src/assets';
const dirChangelog = 'static';

/** Returns last day of last month in YYYY-MM-DD format */
function endDate() {
  return moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
}

(async function run() {
  try {
    // Do this first in case another one fails
    const changelog = generateChangelog();
    fs.writeFileSync(path.join(dirChangelog, 'changelog.json'), JSON.stringify(changelog));
    fs.writeFileSync(path.join(dirAssets, 'changelog.json'), JSON.stringify(changelog));

    // Fetch contributors
    const contributors = await fetchContributors();
    const contributorsBody = JSON.stringify(contributors, null, '\t');
    fs.writeFileSync(path.join(dirAssets, 'contributors.json'), contributorsBody);

    // Fetch repo stats
    const repoStats = await fetchRepositoryStats();
    const repoStatsBody = JSON.stringify(repoStats, null, '\t');
    fs.writeFileSync(path.join(dirAssets, 'repository.json'), repoStatsBody);

    // Do Baremetrics (most likely to fail)
    const baremetricsData = await fetchBaremetrics();
    const planData = await fetchPlans();
    const metricsBody = JSON.stringify({
      metrics: baremetricsData.metrics,
      plans: planData
    }, null, '\t');

    fs.writeFileSync(path.join(dirAssets, 'baremetrics.json'), metricsBody);
    console.log('Wrote metrics to ' + dirAssets);
  } catch (err) {
    console.log('Failed to fetch metrics:', err.message);
  }
})();

function fetchBaremetrics() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.baremetrics.com/v1/metrics',
      qs: { start_date: '2016-12-01', end_date: endDate() },
      headers: { 'Authorization': `Bearer ${process.env.BAREMETRICS_KEY}` }
    };

    request(options, function(err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Metrics request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  });
}

function fetchPlans() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.baremetrics.com/v1/metrics/mrr/plans',
      qs: { start_date: '2018-04-28', end_date: '2018-04-29' },
      headers: { 'Authorization': `Bearer ${process.env.BAREMETRICS_KEY}` }
    };

    request(options, function(err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Plans request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  });
}

async function fetchContributors() {
  return new Promise((resolve, reject) => {
    let contributors = [];

    function next(page = 1) {
      const options = {
        method: 'GET',
        url: 'https://gschier:@api.github.com/repos/getinsomnia/insomnia/contributors',
        qs: { page },
        headers: { 'User-Agent': `insomnia/website` }
      };

      request(options, function(err, response, body) {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          return reject(new Error('Contributors request failed: ' + response.body));
        }

        const newContributors = JSON.parse(body);

        // No-Content means page is empty
        if (newContributors.length === 0) {
          resolve(contributors);
          return;
        }

        contributors = [...contributors, ...newContributors];
        next(page + 1);
      });
    }

    next();
  });
}

function fetchRepositoryStats() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://gschier:@api.github.com/repos/getinsomnia/insomnia',
      headers: { 'User-Agent': `insomnia/website` }
    };

    request(options, function(err, response, body) {
      if (response.statusCode !== 200) {
        return reject(new Error('Repository stats request failed: ' + response.body));
      }

      resolve(JSON.parse(body));
    });
  });
}

function generateChangelog() {
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
      date: frontmatter.date,
      version: frontmatter.slug,
      channel: frontmatter.channel || 'stable',
      link: frontmatter.link || null,
      major: frontmatter.major || [],
      minor: frontmatter.minor || [],
      fixes: frontmatter.fixes || []
    });
  }
  return items.sort((a, b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));
}
