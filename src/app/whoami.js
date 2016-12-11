import * as session from '../session';

export async function init () {
  if (!session.hasSessionId()) {
    return;
  }

  const data = await session.whoami();

  _renderText('name', `${data.firstName} ${data.lastName}`.trim());
  _renderText('current-plan', data.planName);

  const els2 = document.querySelectorAll('[data-hide-until-rendered]');
  for (const el of els2) {
    el.setAttribute('data-hide-until-rendered', 'show');
  }
}

function _mapSelector (selector, fn) {
  const els = document.querySelectorAll(selector);
  for (const el of els) {
    fn(el);
  }
}

function _renderText (name, value) {
  _mapSelector(`[data-render="${name}"]`, el => {
    el.innerHTML = value;
  });
}
