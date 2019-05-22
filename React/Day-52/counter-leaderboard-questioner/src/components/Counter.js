import React from 'react';
import { Button } from 'reactstrap'
const counterStyle = {
    border: '2px solid #000000',
    width: '50%'
}

export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={counterStyle}>
        <h5>{(this.props.name === '')? 'Counter': this.props.name + `'s Counter`}: {this.props.count}</h5>
        <Button color="success" onClick={this.props.onClick}>+</Button>
        <Button color="danger" onClick={this.props.onMouseDown}>-</Button>
        <Button color="secondary" onClick={this.props.onButtonPress}>Delete Me</Button>
            </div>
        )
    }
}