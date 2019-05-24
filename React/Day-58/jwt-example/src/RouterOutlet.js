import * as React from 'react';
import { Route, NavLink, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { Login } from './components/screens/Login'
import { Home } from './components/screens/Home'
import { Group } from './components/screens/Group'
import { logOut } from './redux/auth/actions'

import FacebookLogin from 'react-facebook-login'

const PureRouterOutlet = ({isAuthenticated}) => {
    return (
        <div className="App">
            <div style={{textAlign: "center"}}>
            <h1>
                React Examples
            </h1>
            </div>
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink exact={true} to="/"
                className="nav-link"
                activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact={true} to="/users"
                className="nav-link"
                activeClassName="active">Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact={true} to="/groups"
                className="nav-link"
                activeClassName="active">Groups</NavLink>
            </li>
            {isAuthenticated ? (
                <li className="nav-item">
                <a href="#" onClick={logOut} className="nav-link">LogOut</a>
                </li>
            ): null}
            </ul>
            {isAuthenticated ? (
                <div>
                    <Switch>
                        <Route path='/groups' component={Group} />
                        <Route component={Home} />
                    </Switch>
                    </div>
            ) : (
                <div>
                    <Route component={Login} />
                    {/* <FacebookLogin /> */}
                    </div>
            
            )}
        </div>
    )
}

export const RouterOutlet = withRouter(
    connect((state)=>({
        isAuthenticated: state.auth.isAuthenticated
    })
    ,
    (dispatch) => ({
       logOutAction: ()=> dispatch(logOut())
    })
)(PureRouterOutlet))
