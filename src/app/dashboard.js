import * as session from '../session';

export async function init (pathname) {
  if (!pathname.match(/^\/app\/$/)) {
    return;
  }

  if (session.hasSessionId()) {

  }
}
