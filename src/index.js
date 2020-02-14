import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleWare from './store/middleWare';
import reducers from './store/reducers';

import App from './scene/App';

const store = createStore(reducers, middleWare);
const rootElement = document.getElementById('container');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


module.hot.accept();