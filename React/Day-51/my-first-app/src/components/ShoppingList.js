import * as React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap'

export default class ShoppingList extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){

        const listItems = this.props.list.map(listItem => 
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

// export function Hello () {
//     <div>
//       <p>Hello All this is {this.props.name}</p>
//     </div>
//   }