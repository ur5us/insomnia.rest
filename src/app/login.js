import * as session from '../session';

export function init (pathname) {
  if (!pathname.match(/^\/app\/login\/$/)) {
    return;
  }

  document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const button = this.querySelector('button[type="submit"]');
    const buttonText = button.innerHTML;
    button.innerHTML = 'Loading';
    button.setAttribute('disabled', 'disabled');

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
      await session.login(email, password);
      window.location = '/app';
    } catch (err) {
      alert(err.message);
      button.removeAttribute('disabled');
      button.innerHTML = buttonText;
    }
  });
}
