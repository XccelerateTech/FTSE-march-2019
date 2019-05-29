import * as React from 'react';
import Questioner from '../components/Questioner'
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'


export class QuestionerPage extends React.Component {
    logout = () => {
        this.props.logout()
    }
     render(){
        return (
            <div>
                <GoBack />
                <Questioner question="What is your favourite colour?" />
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
export default connect(null, mapDispatchToProps)(QuestionerPage)