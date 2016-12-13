import * as session from '../session';

let step;

export function init (pathname) {
  if (!pathname.match(/^\/app\/signup\/$/)) {
    return;
  }

  step = 1;
  _updateVisibility();

  for (const link of document.querySelectorAll('.step-back')) {
    link.addEventListener('click', _handleBack);
  }

  document.querySelector('form')
    .addEventListener('submit', _handleSubmit);

  document.querySelector('input[name="password-confirm"]')
    .addEventListener('keydown', _handleConfirmPasswordChange);
}

/** Update visibility of signup steps */
function _updateVisibility () {
  const elements = document.querySelectorAll('[data-step]');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (step === i + 1) {
      el.style.display = 'block';
      el.querySelector('input').focus();
    } else {
      el.style.display = 'none';
    }
  }
}

function _handleBack (e) {
  e.preventDefault();
  step--;
  _updateVisibility();
}

function serializeForm () {
  return {
    firstName: document.querySelector('input[name="first-name"]').value,
    lastName: document.querySelector('input[name="last-name"]').value,
    email: document.querySelector('input[name="email"]').value,
    password: document.querySelector('input[name="password"]').value,
    password2: document.querySelector('input[name="password-confirm"]').value
  }
}

async function _handleSubmit (e) {
  e.preventDefault();

  const button = this.querySelector('button[type="submit"]');
  const buttonText = button.innerHTML;
  button.innerHTML = 'Loading';
  button.setAttribute('disabled', 'disabled');

  if (step === 2) {
    const {firstName, lastName, email, password} = serializeForm();
    try {
      await session.signup(firstName, lastName, email, password);
      window.location = '/app';
      return;
    } catch (err) {
      alert(err.message);
      button.removeAttribute('disabled');
      button.innerHTML = buttonText;
      return;
    }
  }

  step++;
  _updateVisibility();
}

function _handleConfirmPasswordChange (e) {
  const data = serializeForm();
  if (step === 2 && data.password !== data.password2) {
    e.target.setCustomValidity('Passwords did not match');
  } else {
    e.target.setCustomValidity('');
  }
}
