import * as React from 'react';
import GoBack from '../components/GoBack'
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'

export class AboutUsPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }

    logout = () => {
        this.props.logout()
    }
    clicked=()=>{
        console.log('clicked')
        this.setState({
            count: this.state.count +1
        })
        if(this.state.count > 5){
            this.props.history.push('/secretPage')

        }
    }

     render(){
        return (
            <div>
                <GoBack />
                <h1>This is an application to help with React-Router-Dom
                </h1>
                <p>Please do not <span onClick={this.clicked}> Click </span> me</p>
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
export default connect(null, mapDispatchToProps)(AboutUsPage)