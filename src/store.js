import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux'
import logger from 'redux-logger';

import rootEpic from './epics/index';
import reducers from './reducers/index';

const epicMiddleware = createEpicMiddleware(rootEpic); 

const store = createStore(
  reducers, 
  applyMiddleware(logger, epicMiddleware) // This allow as the pingEpic to basiclly listen for actions 
);

export default store;    

/* 
this reducer and this epic, how these are all talking to each other, is when you create a store,
you notice how we have the pingEpic, we create some middleware and then we create our store,
we add both the ping reducer and the middleware itself.
*/ 