import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { applyMiddleware,createStore,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import {rootReducer} from './redux/reducer/'
import mySaga from './redux/sagas'
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// Then run the saga
sagaMiddleware.run(mySaga)

// Render the application
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  
 ,
  document.getElementById('root')
);

