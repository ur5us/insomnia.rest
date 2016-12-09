import * as login from './login';
import * as signup from './signup';
import * as navbar from './navbar';
import * as buttons from './buttons';

export function init () {
  login.init(window.location.pathname);
  signup.init(window.location.pathname);
  navbar.init(window.location.pathname);
  buttons.init(window.location.pathname);
}
