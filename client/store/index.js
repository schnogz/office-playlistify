import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { rootSaga, rootReducer, selectors } from 'data'
import { api } from 'services/api'

const devToolsConfig = {
  maxAge: 1000,
  serialize: {}
};

const configureStore = () => {
  const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(devToolsConfig) : compose;

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
      autoRehydrate()
    )
  );
  sagaMiddleware.run(rootSaga);
  persistStore(store, { whitelist: ['session', 'preferences'] });

  return {
    store,
    history
  }
};

export default configureStore