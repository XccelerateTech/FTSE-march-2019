import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_NOW = 'LOGOUT_NOW';



export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    message: message
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_NOW
  }
}

export function loginUser(username, password) {
  return (dispatch) => {
    return axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`, {
      email: username,
      password: password
    }).then(response => {

      console.log(response)

      if (response.data == null) {
        dispatch(loginFailure('Unknown Error?'));
      } else if (!response.data.token) {
        dispatch(loginFailure(response.data.message))
      } else {
        console.log('why?')
        console.log(response.data.token)

        localStorage.setItem('token', response.data.token)
        dispatch(loginSuccess())
      }
    }).catch(err => console.log("Error: ", err))
  }
}



export function logoutNow() {
  return (dispatch) => {
      localStorage.removeItem('token');
    dispatch(logoutSuccess())
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



// class Person extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       firstName: null
//     }
//   }

//   render(){
//     return (
//       <div>
//         <h1>This is a page about {this.state.firstName}</h1>
//       </div>
//     )
//   }
// }


// // Wrong
// this.state.firstName = 'Sam'

// //Right
// this.setState({
//   firstName: "Sam"
// })


// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment
// })
// //Right
// this.setState((state, props) => ({
// counter: state.counter + props.increment
// }));

// state = {
//   toyId: 911,
//   toyName: "Police Man Tim",
//   toyAge: 5,
//   outOfStock: false,
//   manufactureDate: 1992/02/03
// }

// this.setState({
//   outOfStock: true
// })