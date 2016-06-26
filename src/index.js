import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//browserHistory tells React Router how to interpret changes to the URL
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes ={routes}/>
  </Provider>
  , document.querySelector('.container'));
