import qs from 'query-string';
import { NOT_FOUND } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';

export const ROUTES = {
  EARTH: {
    path: '/',
    page: 'earth',
    auth: false
  },
  [NOT_FOUND]: {
    path: '/404',
    page: 'not-found',
    auth: false
  }
};

export const CONFIG = {
  basename: process.env.REACT_APP_BASE_URL,
  location: 'router',
  querySerializer: {
    stringify: qs.stringify,
    parse: (url) => qs.parse(url, { arrayFormat: 'comma', parseNumbers: true, parseBooleans: true })
  },
  initialDispatch: false,
  restoreScroll: restoreScroll({
    shouldUpdateScroll: (prev, current) => {
      if (
        ((current.kind === 'redirect' && prev.kind === 'push') ||
          (current.kind === 'pop' && prev.kind === 'pop')) &&
        prev.pathname === current.pathname
      ) {
        return prev.prev.pathname !== current.pathname ? [0, 0] : false;
      }
      return prev.pathname !== current.pathname ? [0, 0] : false;
    }
  })
};

export default {
  ROUTES,
  CONFIG
};