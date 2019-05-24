import * as React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap'

import AddItem from './AddItem'

export default class ShoppingList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: this.props.list
        }
    }

    deleteItem = (id) => {
        const list = this.state.list.filter( item => {
          return item.id != id;
        });
        this.setState(
          {list}
        )
      }
    
      addItem = (item) => {
        item.id = Math.random();
        const list = [...this.state.list,item]
        this.setState(
          {
            list
          }
        )
    
      }

    render(){

        const listItems = this.state.list.map(listItem => 
            <ListGroupItem color="warning" key={listItem.id}>{listItem.item}</ListGroupItem>)

        return (
            <div>
                <AddItem addItem={this.addItem}/>
                <h3>Shopping List for: {this.props.name}</h3>
                <ListGroup>
                    {listItems}
                </ListGroup>
                
            </div>
        )
    }
}
