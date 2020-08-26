import React from 'react';
import App from './App';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer/index';
import rootSaga from './saga/index';

const  sagaMidleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMidleware))
sagaMidleware.run(rootSaga)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
