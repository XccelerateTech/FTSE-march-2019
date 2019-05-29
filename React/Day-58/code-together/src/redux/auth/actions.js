import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

function loginSuccess (){
    return {
        type: LOGIN_SUCCESS
    }
}

function loginFailure (message) {
    return {
        type: LOGIN_FAILURE,
        message: message
    }
}

export function loginUser(email, password){
    return(dispatch)=>{
        console.log(email, password)
        return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`, {
            email: email,
            password: password
        }).then(response => {
            if(response.data == null){
                dispatch(loginFailure('Unknown Error'))
            } else if (!response.data.token) {
                dispatch(loginFailure(response.data.message || 'No Token!'))
            } else {
                localStorage.setItem('token', response.data.token)
                dispatch(loginSuccess())
            }
        }).catch(err => console.log("Error: ", err))
    }
}

export function loginFacebook(accessToken) {
    return (dispatch) => {
      return axios
        .post(
          `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
          {
            access_token: accessToken
          }
        )
        .then(response => {
          if (response.data == null) {
            dispatch(loginFailure('Unknown Error'));
          } else if (!response.data.token) {
            // If there was a problem, we want to
            // dispatch the error condition
            dispatch(loginFailure(response.data.message || ''));
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.data.token);
            // Dispatch the success action
            dispatch(loginSuccess());
          }
        })
        .catch(err => console.log('Error: ', err));
    };
  }

  export const LOGOUT_NOW = 'LOGOUT_NOW';

  export function logoutSuccess() {
    return {
      type: LOGOUT_NOW
    }
  }
  export function logoutNow() {
    return (dispatch) => {
      localStorage.clear('token');
      dispatch(logoutSuccess())
    }
  }