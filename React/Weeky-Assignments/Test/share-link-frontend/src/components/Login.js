import * as React from 'react';
import { loginUser, loginFacebook } from '../redux/login/actions'
import { connect } from "react-redux"
import FacebookLogin from 'react-facebook-login'


export class PureLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.responseFacebook = this.responseFacebook.bind(this)
    }

    componentClicked() {
        return null;
      }
    
      responseFacebook = (userInfo) => {
        if (userInfo.accessToken) {
          this.props.loginFacebook(userInfo.accessToken);
          this.props.history.push("/users") 
        }
        return null;
      }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);
    }

    login = () => {
        this.props.login(this.state.username, this.state.password)
        this.props.history.push("/users")
    }

    render() {
        return (
            <div>
            Username: <input onChange={this.onChangeField.bind(this, 'username')} type="text" value={this.state.username} /><br />
            Password: <input onChange={this.onChangeField.bind(this, 'password')} type="password" value={this.state.password} /><br />
            <button onClick={this.login}>Log in</button>

            <div>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(loginUser(username, password))
        },    
        loginFacebook: (accessToken) => {
            dispatch(loginFacebook(accessToken))
        }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PureLogin)


//old code 
// const Login = connect(null, (dispatch) => ({
//     login: (username, password) =>
//       dispatch(loginUser(username, password))
//   }))(PureLogin);

// const mapStateToProps = (state) => {
//     return {
//         links: state.links.linkList
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addLink: (link) => {
//             dispatch(AddLinkActionThunk(link))
//         },
//         addTag: (tag) => {
//             dispatch(AddTagActionThunk(tag))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PureAddButton);

