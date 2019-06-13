import * as React from 'react';
import { connect } from 'react-redux'

import { logoutNow } from '../redux/login/actions'


export class UsersPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Welcome to the user page</h1>
                <p>Well done for getting this far.</p>
                <button onClick={this.logout}>Now you can Logout</button>
            </div>
        )
    }

    logout = () => {
        this.props.logout()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutNow())
        }
    }
}


// if you dont have mapStateToProp, you must pass null as the first parameter, as the functions dont look at names, but the order of passing variables
export default connect(null,mapDispatchToProps)(UsersPage)