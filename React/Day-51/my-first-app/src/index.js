import React from 'react';

// import * as React from 'react'



import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import housepic from "./housepic.png"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line


// const style1 = {
//     fontWeight: "bold",
//     border: "2px solid black"
// }

// const element = (
//     <div>
//       <h3 style = {style1}>I am a separate element within the app</h3>
//       <p style={{"fontSize":"20px"}}>I am a P tag. </p>
//       <img src={housepic} style={{"height":"50px", "width":"50px"}} alt="this should be a picture of a house"/>
//       </div>
//   )

ReactDOM.render(
<App />, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
