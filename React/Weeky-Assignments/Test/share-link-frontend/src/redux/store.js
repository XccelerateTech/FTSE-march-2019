import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { tagReducer, linkReducer } from './links/reducer';

import { authReducer } from './login/reducers';


import logger from 'redux-logger'

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    links: linkReducer,
    tags: tagReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = createStore (rootReducer, composeEnhancers( applyMiddleware(logger), applyMiddleware(thunk)))

