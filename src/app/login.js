import * as session from '../session';

export function init (pathname) {
  if (!pathname.match(/^\/app\/login\/$/)) {
    return;
  }

  document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
      await session.login(email, password);
    } catch (err) {
      alert(err.message);
      return;
    }

    window.location = '/app';
  });
}
