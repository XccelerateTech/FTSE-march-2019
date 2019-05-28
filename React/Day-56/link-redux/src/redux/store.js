import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers'
    
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

// export const store = () => {
//     return createStore(
//     rootReducer,
//     composeEnhancers(
//  applyMiddleware(thunk) ));
//     }


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk, logger)
    )
)