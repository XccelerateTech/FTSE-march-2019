import * as React from 'react';

export default class Questioner extends React.Component{
    constructor(props){
        super(props)

        this.state={
            answer: ''
        }
    }

    query = () => {
        const userInput = prompt(this.props.question)
        if(userInput === null){
            this.setState({
                answer: "Please Input an Answer"
            }) 
        } else {
            this.setState({
                answer: userInput
            })
        } return 
    }

    render () {
        return (
            <div>
            <button className="promptBox" onClick={this.query}>Questioner</button>
            <p>{this.state.answer}</p>
        </div>
        )
    }
}