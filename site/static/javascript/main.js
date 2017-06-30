(function () {
  var els = document.querySelectorAll('.__download-link');

  var location = null;
  var platform = null;

  if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
    platform = 'Mac';
    location = '/download#mac';
  } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
    platform = 'Windows';
    location = '/download#windows';
  } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
    platform = 'Linux';
    location = '/download#ubuntu';
  }

  for (var i = 0; i < els.length; i++) {
    var el = els[i];

    if (platform) {
      el.innerHTML = 'Download The App';
    }

    if (location) {
      el.onclick = function (e) {
        e.preventDefault();
        window.location = location;
      };
    }
  }
})();

(function () {
  var changelogListItems = document.querySelectorAll('.changelog__list-item');
  for (var i = 0; i < changelogListItems.length; i++) {
    var item = changelogListItems[i];
    var match = item.innerHTML.match(/\(PR:(\d+)(:([^)]+))?\)/);
    if (match) {
      var prNumber = match[1];
      var user = match[3] || '';
      var userString = (user ? ' by ' + user : '');
      var anchor = document.createElement('a');
      anchor.target = '_blank';
      anchor.href = 'https://github.com/getinsomnia/insomnia/pull/' + prNumber;
      anchor.innerHTML = '(#' + prNumber + userString + ')';
      item.innerHTML = item.innerHTML.replace(match[0], '');
      item.appendChild(anchor);
    }
  }
})();
