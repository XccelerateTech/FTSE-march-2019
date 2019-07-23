import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal"
import CommentCard from './components/CommentCard'
import faker from 'faker'
import CounterDisplay from './components/CounterDisplay'

import ShoppingList from './components/ShoppingList'

const shopping = [
  {id: 0, item:"Apples"},
  {id: 1, item:"Minced Beef"},
  {id: 2, item:"Eggs"},
  {id: 3, item:"Flour"}    ]



function App() {


  return (
    <div className="App row">
    <div>
 <header className="App-header col-8">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Welcome to React Class </h1>
        </header>
    </div>
    <div className="col-4">
<input type="text"/>
        <textarea></textarea>
        <Modal buttonLabel = "This will open a modal"/>
        <br />
        <br />
        <CommentCard 
        date = "2019/03/12"
        author= "John"
        comment = "Wow that is a nice picture"
        image = {faker.image.avatar()}
        />

  <br />
      <ShoppingList 
      name="Sam"
      list={shopping}
      />


      <br/>
      <br />
      <div>
          <CounterDisplay/>
      </div>
    </div>
        
        
    </div>
  );
}

export default App;
