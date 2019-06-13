import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store'




ReactDOM.render(
    <Provider store={createReduxStore}>
    <App />
    </Provider>,
    document.getElementById('root'));

// let gameOfThronesCharacters = {
//     johnSnow : {
//         firstName: "John",
//         lastName: "Snow",
//         houseSigil: "The Direwolf",
//         weapon: "Long Claw"
//     },
//     tyrionLannister : {
//         firstName: "Tyrion",
//         lastName: "Lannister",
//         houseSigil: "The Lion",
//         weapon: "Words and Wit"
//     },
//     robertBaratheon : {
//         firstName: "Robert",
//         lastName: "Baratheon",
//         houseSigil: "The Stag",
//         weapon: "Warhammer"
//     }
    
// }

// function generateMedievalIntro (character){
//     return `Hail ${character.firstName} ${character.lastName}, of ${character.houseSigil}! Welcome to our hall, please sheath your ${character.weapon} and enjoy this meal!`
// }

// const element = (
//     <div>
//         <h1>Game of Thrones</h1>
//         <p>This show is very popular at the moment. There are currently {4 + 4 } seasons at the moment.</p>
//         <ol>
//             <li>
//                 {generateMedievalIntro(gameOfThronesCharacters.johnSnow)}
//             </li>
//             <li>
//                 {generateMedievalIntro(gameOfThronesCharacters.tyrionLannister)}
//             </li>
//             <li>
//                 {generateMedievalIntro(gameOfThronesCharacters.robertBaratheon)}
//             </li>
//         </ol>
//         <p>Though I would need to say that my favourite character is {gameOfThronesCharacters.tyrionLannister.firstName +" " + gameOfThronesCharacters.tyrionLannister.lastName}</p>
//     </div>
// )

// const element = (
//     <div>
//         <h1>A JSX element</h1>
//         <p>
//             A collection of html tags declared in a <span style={{"fontWeight":"bold"}}>JavaScript file</span>. To be transpiled and converted into html through React to render information to the dom.
//         </p>
//         <input type="text"/><button>Submit</button>
//         <ol>
//             <li>
//                 You can have headings 
//             </li>
//             <li>
//                 Paragraphs 
//             </li>
//             <li>
//                 Lists 
//             </li>
//             <li>
//                 Inputs and Text areas
//             </li>
//             <li>
//                 Everything you can do in HTML, you can do here.
//             </li>

//         </ol>
//     </div>
// )
    // <Provider store={createReduxStore}>
    // <App />
    // </Provider>,

// ReactDOM.render(

//     element,
//     document.getElementById('root'));

// declare your element here

// const shoppingList = ["Chocolate", "Apples", "Broccoli", "Drone"]

// function list( listArray ) {
//     if (!listArray) {
//       return null;
//     }
  
//     if (!listArray.length) {
//       return <p>Sorry, the list is empty.</p>;
//     } else {
//       return (
//         <div>
//           {listArray.map(item => <ul><li item={item}> {item} </li></ul>)}
//         </div>
//       );
//     }
//   }

//   const element = (
//       <div>
//           <h1>Shopping List</h1>
//           {list(shoppingList)}
//       </div>
//   )

//   ReactDOM.render(

//     element,
//     document.getElementById('root'));


// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );


// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

// function Profile (props) {
//     return <p>This character is called, {props.firstName} {props.lastName}, he crossed the Carribean as a child and is now {props.age} years old he is a {props.profession}</p>
// }

// let props = {};
// props.firstName = "William";
// props.lastName = "Turner";
// props.profession = "Blacksmith";
// props.age = 27;


// function App () {
//     return (
//         <Profile {...props} />
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


// function TodoList(props) {
//     const renderTodo = (todo, i) => {
//       return (
//         <li key={ i }>
//           { props.children(todo) }
//         </li>
//       );
//     }
//     return (
//       <section className='main-section'>
//         <ul className='todo-list'>{ props.todos.map(renderTodo)}</ul>
//       </section>
//     );
//   }
  
//   function App() {
//     const todos = [
//       { label: 'Write tests', status: 'done' },
//       { label: 'Sent report', status: 'progress' },
//       { label: 'Answer emails', status: 'done' }
//     ];
//     var isCompleted = todo => todo.status === 'done';
  
//     return (
//       <TodoList todos={ todos }>
//         { todo => isCompleted(todo) ? <b>{ todo.label }</b> : todo.label }
//       </TodoList>
//     );
//   }