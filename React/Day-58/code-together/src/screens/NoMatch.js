import * as React from 'react';
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'


export class NoMatch extends React.Component {
    logout = () => {
        this.props.logout()
    }
     render(){
        return (
            <div>
                <GoBack />
                <h1>No Page found, 404 error, please get better at coding...</h1>
                <button onClick={this.logout}>Now you can Logout</button>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutNow())
        }
    }
}
export default connect(null, mapDispatchToProps)(NoMatch)