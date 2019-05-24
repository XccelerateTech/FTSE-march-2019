import * as React from 'react';
import GoBack from '../components/GoBack'

export default class AboutUsPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
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
            </div>
        )
    }
}