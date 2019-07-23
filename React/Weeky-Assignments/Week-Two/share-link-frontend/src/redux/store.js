import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { tagReducer, linkReducer } from './links/reducer';

import logger from 'redux-logger'

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    links: linkReducer,
    tags: tagReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = () => {
    return createStore (rootReducer, composeEnhancers( applyMiddleware(logger), applyMiddleware(thunk)))
}
