import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import root from 'window-or-global';
import App from './components/App/index.js';
import rootReducer from './reducers';

import './styles/reset.css';
import './styles/global.css';

const getReduxDevTools = () =>
  root.devToolsExtension ? root.__REDUX_DEVTOOLS_EXTENSION__({ maxAge: 150 }) : ff => ff;

const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk), getReduxDevTools()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
