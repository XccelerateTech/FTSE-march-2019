import React from 'react';
import LeaderBoard from './components/LeaderBoard';
import Questioner from './components/Questioner'


import ShoppingList from './components/ShoppingList'
import {Hello} from './components/ShoppingList'

const shopping = [
  {id: 0, item:"Apples"},
  {id: 1, item:"Minced Pork"},
  {id: 2, item:"Eggs"},
  {id: 3, item:"Flour"}    ]

function App() {
  return (
    <div className="App">
    <Questioner question="What is your name?"/>
    <LeaderBoard />


    <br />
    <ShoppingList name="Sam" list={shopping} />
    <br />

    {/* This is usage for a JSX child, inside the component Hello, we have the string literal 'Johnny', which can be used in the Hello,js component through the {props.children} JSX */}
    <Hello>Johnny</Hello> 

    </div>

  );
}

export default App;
