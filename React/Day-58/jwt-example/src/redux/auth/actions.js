import axios from 'axios';

//Action declaration for LOGIN_SUCCESS and Action creator 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

//Action declaration for LOGIN_FAILURE and Action creator
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function loginFailure(message) {
    return {
        type: LOGIN_FAILURE,
        message: message
    }
}

//Action declaration for LOGOUT and Action creator
export const LOGOUT = 'LOGOUT';

function logOutAction() {
    return {
        type: LOGOUT
    }
}

// Actual functions with the dispatch action.

export function loginUser(username, password) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`,
            {
                username: username,
                password: password
            }).then(response => {
                if (response.data == null) {
                    dispatch(loginFailure('UnKnown Error'));
                } else if (!response.data.token) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginFailure(response.data.message || "No Token generated?"))
                } else {
                    localStorage.setItem('token', response.data.token);

                    dispatch(loginSuccess());
                }
            });
    };
}

export function loginFacebook(accessToken) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
            {
                access_token: accessToken
            })
            .then(response => {
                if (response.data == null) {
                    dispatch(loginFailure('UnKnown Error'))
                } else if (!response.data.token) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginFailure(response.data.message || "Token not generated!"))
                } else {
                    localStorage.setItem('token', response.data.token);
                    // Dispatch the success action
                    dispatch(loginSuccess())
                }
            });
    };
}

export function logOut() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logOutAction());
    };
}