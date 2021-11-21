require('file-loader?name=[name].[ext]!../public/index.html');
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import charityReducer from './reducers/charity-reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const store = createStore(charityReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
