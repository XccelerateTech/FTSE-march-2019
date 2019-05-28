import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

/*
               Exercise A - Day 57
               */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger))

);