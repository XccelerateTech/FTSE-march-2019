import * as React from 'react';
import ShoppingList from '../components/ShoppingList'
import GoBack from '../components/GoBack'


export default class ShoppingListPage extends React.Component {
     render(){
        const shopping = [
            { id: 0, item: "Apples" },
            { id: 1, item: "Minced Pork" },
            { id: 2, item: "Eggs" },
            { id: 3, item: "Flour" }]
        return (
            <div>
                <GoBack />
                <ShoppingList name="Sam" list={shopping} />
            </div>
        )
    }
}