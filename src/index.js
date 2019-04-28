import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './containers/app/root';
import * as serviceWorker from './serviceWorker';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import { store } from './store';
import { history } from './utils';

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <StyletronProvider value={engine}>
        <Root />
      </StyletronProvider>
    </Router>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*



import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import App from './containers/App/index';
import './global-styles';
import './global-rewrites';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';
import { history } from './_helpers';

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();




*/