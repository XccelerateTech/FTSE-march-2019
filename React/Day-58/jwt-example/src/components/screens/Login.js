import * as React from 'react';
import {FacebookLogin} from 'react-facebook-login';
import {connect} from 'react-redux'
import {loginFacebook, loginUser} from '../../redux/auth/actions';

class PureLogin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.responseFacebook = this.responseFacebook.bind(this)


    }

    componentClick (){
        return null;
    }

    responseFacebook = (userInfo) => {
        if(userInfo.accessToken){
            this.props.loginFacebook(userInfo.accessToken);
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

    render(){
        return  <FacebookLogin appId='' />;
        return (<div>
                <h3>Login Form</h3>
                <div>
                    <form>
                        <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" className="form-control" onChange={this.onChangeField.bind(this, 'username') }value={this.state.username}/>
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                        <input type="text" name="password" className="form-control" onChange={this.onChangeField.bind(this, 'password')} value={this.state.password}/>
                        </div>
                        <input type='submit' value='Submit' className = "btn btn-primary" />
                    </form>
                    <div>
                      <h4>OR Login via Facebook</h4>
                    {/* <FacebookLogin  
                    appId ='207428583534542'
                    //{process.env.REACT_APP_FACEBOOK_APP_ID || ''}
                    // autoLoad={true}
                    // fields="name,email,picture"
                    // onClick={this.componentClick}
                    // callback={this.responseFacebook}
                    />  */}
                    <FacebookLogin appId='' />
                    </div> 
                </div>
        </div>);
    }
}

// export const Login = connect(null, (dispatch) => ({
//     loginFacebook:(accessToken)=> dispatch(loginFacebook(accessToken))
// }))(PureLogin)

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


export const Login = connect(mapStateToProps, mapDispatchToProps)(PureLogin)