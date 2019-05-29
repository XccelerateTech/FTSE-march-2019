import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {authReducer as AuthReducer} from './auth/reducers';
import { informationReducer as InformationReducer} from './information/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        auth: AuthReducer,
        info: InformationReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)