import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_NOW } from './actions';

const initialState = {
    isAuthenticated: false || (localStorage.getItem('token') != null)
}

export function authReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true
            });
        case LOGIN_FAILURE:
            return state;
        case LOGOUT_NOW:
            return Object.assign({}, state, {
                isAuthenticated: false
            });
        default:
            return state;
    }
}