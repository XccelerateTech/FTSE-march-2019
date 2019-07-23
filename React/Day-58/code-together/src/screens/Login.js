import * as React from 'react';
import {connect} from 'react-redux'
import {loginUser, loginFacebook} from '../redux/auth/actions'
import FacebookLogin from 'react-facebook-login'

 export class PureLogin extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.currentTarget.value;

        this.setState(state)
    }

    login = () => {

      this.props.login(this.state.email, this.state.password)
      this.props.history.push('/shoppingList')

    }

    componentClicked() {
        return null;
      }
    
      responseFacebook = (userInfo) => {
        if (userInfo.accessToken) {
          this.props.loginFacebook(userInfo.accessToken);

        }
        return null;
      }

    render(){
        return (
            <div>
                Username:
                <input onChange={this.onChangeField.bind(this, 'email')} type="text" value={this.state.email} /> 
                <br />
                Password:
                <input onChange={this.onChangeField.bind(this, 'password')} type="text" value={this.state.password} /> 
                <br />

                <button onClick={this.login}>Login</button>

                <br />
                <FacebookLogin  
                appId ={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClick}
                    callback={this.responseFacebook}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password))
        },
        loginFacebook: (accessToken) => {

            dispatch(loginFacebook(accessToken))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PureLogin)