import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

let middleware = null;

if (process.env.REACT_APP_DEV === 'true') {
  const loggerMiddleware = createLogger();
  middleware = [thunkMiddleware, loggerMiddleware];
} else {
  middleware = [thunkMiddleware];
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);
