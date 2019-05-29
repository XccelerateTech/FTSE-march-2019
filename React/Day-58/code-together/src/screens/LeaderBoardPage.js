import * as React from 'react';
import LeaderBoard from '../components/LeaderBoard'
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'


export class LeaderBoardPage extends React.Component {
    logout = () => {
        this.props.logout()
    }
     render(){
        return (
            <div>
                <GoBack />
                <LeaderBoard />
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
export default connect(null, mapDispatchToProps)(LeaderBoardPage)