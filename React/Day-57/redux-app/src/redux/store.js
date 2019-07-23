import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { stockReducer } from './stock/reducers';
import { teamReducer } from './team/reducers';

const rootReducer = combineReducers({
    stock: stockReducer,
    team: teamReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)