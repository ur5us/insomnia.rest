import * as session from '../session';

export async function init () {

  // If we don't have a sessionId, we're definitely not logged in
  if (!session.hasSessionId()) {
    _setLoggedIn(false);
    return;
  }

  // We have a sessionId, so assume we're logged in
  _setLoggedIn(true);

  // Actually check the server to see if we're logged in
  try {
    await session.whoami();
    _setLoggedIn(true);
  } catch (err) {
    _setLoggedIn(false);
    session.logout();
  }
}

function _setLoggedIn (isLoggedIn) {
  if (isLoggedIn) {
    document.body.setAttribute('data-logged-in', 'yes');
  } else {
    document.body.setAttribute('data-logged-in', 'no');
  }
}
