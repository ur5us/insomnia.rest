export function trackEvent (...args) {
  window.ga && window.ga('send', 'event', ...args);
}
