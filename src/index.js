import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './containers/app/root';
import * as serviceWorker from './serviceWorker';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(<StyletronProvider value={engine}>
  <Root />
</StyletronProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
