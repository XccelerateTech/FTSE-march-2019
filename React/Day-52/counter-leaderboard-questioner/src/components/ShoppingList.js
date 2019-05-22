import * as React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap'


export default class ShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list
        }
    }

   

    render(){

        const listItems = this.state.list.map(listItem => 
            <ListGroupItem color="warning" key={listItem.id}>{listItem.item}</ListGroupItem>)

        return (
            <div>
                <h3>Shopping List for: {this.props.name}</h3>
                <ListGroup>
                    {listItems}
                </ListGroup>
                
            </div>
        )
    }
}

export function  Hello (props) {
return (
<div><h1>
   Hello, {props.children}, this is a message for you </h1>  </div>
)}