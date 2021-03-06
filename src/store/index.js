import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import sagas from 'sagas';

import { ROUTES, CONFIG } from 'routes';

// New modules
import { handleModule } from 'vizzuality-redux-tools';

// Modules
// import * as user from 'modules/user';
// import * as map from 'modules/map';
// import * as sidebar from 'modules/sidebar';
// import * as indexes from 'modules/indexes';
// import * as places from 'modules/places';
// import * as layers from 'modules/layers';
// import * as fullscreen from 'modules/fullscreen';
// import * as widgets from 'modules/widgets';
// import * as widget from 'modules/widget';
// import * as experience from 'modules/experience';
// import * as locations from 'modules/locations';

const sagaMiddleware = createSagaMiddleware();

const initStore = (initialState = {}) => {
  // Create router reducer, middleware and enhancer
  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer,
    initialDispatch
  } = connectRoutes(
    ROUTES,
    CONFIG
  );

  const reducers = combineReducers({
    router: routerReducer,
    // user: handleModule(user),
    // map: handleModule(map),
    // sidebar: handleModule(sidebar),
    // indexes: handleModule(indexes),
    // places: handleModule(places),
    // layers: handleModule(layers),
    // fullscreen: handleModule(fullscreen),
    // widgets: handleModule(widgets),
    // widget: handleModule(widget),
    // experience: handleModule(experience)
  });

  const middlewares = applyMiddleware(
    thunk,
    routerMiddleware,
    sagaMiddleware
  );
  const enhancers = composeWithDevTools(routerEnhancer, middlewares);

  // create store
  const store = createStore(reducers, initialState, enhancers);

  // run the sagas && initialDispatch
  sagaMiddleware.run(sagas);
  initialDispatch();

  return { store };
}

export default initStore;
