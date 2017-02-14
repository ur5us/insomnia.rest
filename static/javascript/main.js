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
      el.innerHTML = `Download the App`;
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
  var els = document.querySelectorAll('iframe');

  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    // Auto-size iframes
    el.style.height = el.document['body'].offsetHeight + 'px';
  }
})();

