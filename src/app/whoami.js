import * as session from '../session';

export async function init () {
  if (!session.hasSessionId()) {
    return;
  }

  const data = await session.whoami();

  const els = document.querySelectorAll('[data-render="name"]');
  for (const el of els) {
    el.innerHTML = `${data.firstName} ${data.lastName}`;
  }

  const els2 = document.querySelectorAll('[data-hide-until-rendered]');
  for (const el of els2) {
    el.setAttribute('data-hide-until-rendered', 'show');
  }
}
