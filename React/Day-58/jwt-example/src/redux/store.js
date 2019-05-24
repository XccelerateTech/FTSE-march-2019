import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as GroupReducer} from './group/reducer';
// import {reducer as UserReducer } from './user/reducer';
import thunk from 'redux-thunk';
import {authReducer as AuthReducer} from './auth/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        group: GroupReducer,
        // user: UserReducer,
        auth: AuthReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)