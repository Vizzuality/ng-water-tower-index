import React, { Fragment } from 'react';

import AsyncPage from './async';

const Main = ({ router }) => {
  const { type, routesMap } = router;
  const { page } = routesMap[type];

  return (
    <Fragment>
      {page === 'earth' && <AsyncPage page='earth' />}
    </Fragment>
  )
};

export default Main;
