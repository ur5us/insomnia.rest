import * as session from '../session';

export function init () {
  const els = document.querySelectorAll('[data-action="cancel"]');

  for (let i = 0; i < els.length; i++) {
    els[i].addEventListener('click', async function(e) {
      e.preventDefault();

      if (!confirm('Are you sure?')) {
        return;
      }

      try {
        await session.cancelAccount();
        window.location.reload();
      } catch (err) {
        alert(`Failed to cancel account: ${err}`)
      }
    });
  }
}
