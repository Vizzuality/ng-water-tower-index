import React, { PureComponent } from 'react';

import Link from 'redux-first-router-link';

import './styles.scss';

class NotFound extends PureComponent {
  render() {
    return (
      <div className="c-not-found">
        <div className="not-found--container">
          <div className="not-found--status">404</div>
          <div className="not-found--text">Sorry we couldn't find that page.</div>
          <div className="not-found--links">
            <div className="not-found--links--title">Try one of these</div>

            <ul className="not-found--links--list">
              <li>
                <Link
                  link={{ to: "/" }}
                  className="-light -fullwidth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  link={{ to: "/earth" }}
                  className="-light -fullwidth"
                >
                  Tool
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;