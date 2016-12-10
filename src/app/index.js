const modules = [
  require('./signup').init,
  require('./login').init,
  require('./logout').init,
  require('./dashboard').init,
  require('./subscribe').init,
  require('./session').init,
  require('./whoami').init,
  require('./cancel').init,
];


export function init () {
  modules.map(fn => fn(window.location.pathname));
}
