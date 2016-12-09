import * as session from '../session';

export async function init (pathname) {
  if (!pathname.match(/^\/app\/logout\/$/)) {
    return;
  }

  if (session.hasSessionId()) {
    await session.logout();
  }
}
