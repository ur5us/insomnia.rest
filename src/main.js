(function () {
  // Handle download links
  const els = document.querySelectorAll('.__download-link');

  let location = null;
  let platform = null;

  if (navigator.platform.toLowerCase().indexOf('mac') !== -1) {
    platform = 'Mac';
    location = '/download/#mac';
  } else if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
    platform = 'Windows';
    location = '/download/#windows';
  } else if (navigator.platform.toLowerCase().indexOf('linux') !== -1) {
    platform = 'Linux';
    location = '/download/#ubuntu';
  }

  for (let i = 0; i < els.length; i++) {
    const el = els[i];

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
  // Style changelog list items
  const changelogListItems = document.querySelectorAll('.changelog__list-item');
  for (let i = 0; i < changelogListItems.length; i++) {
    const item = changelogListItems[i];
    const match = item.innerHTML.match(/\(PR:(\d+)(:([^)]+))?\)/);
    if (match) {
      const prNumber = match[1];
      const user = match[3] || '';
      const userString = (user ? ' by ' + user : '');
      const anchor = document.createElement('a');
      anchor.target = '_blank';
      anchor.href = 'https://github.com/getinsomnia/insomnia/pull/' + prNumber;
      anchor.innerHTML = '(#' + prNumber + userString + ')';
      item.innerHTML = item.innerHTML.replace(match[0], '');
      item.appendChild(anchor);
    }
  }
})();

(function () {
  // Add linkable anchors
  const headers = document.querySelectorAll([
    'article h1[id]',
    'article h2[id]',
    'article h3[id]'
  ].join(', '));
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i];
    h.style.cursor = 'pointer';

    h.addEventListener('click', function (e) {
      window.location.hash = '#' + e.target.getAttribute('id');
    });
  }
})();

(function () {
  // Replace images with links to images
  for (const img of document.querySelectorAll('article img')) {
    const a = document.createElement('a');
    a.href = img.getAttribute('src');
    a.target = '_blank';
    if (!img.hasAttribute('title') && img.hasAttribute('alt')) {
      img.setAttribute('title', img.getAttribute('alt'));
    }
    img.parentNode.replaceChild(a, img);
    a.appendChild(img);
  }
})();
