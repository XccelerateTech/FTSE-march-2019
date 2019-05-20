import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import logo from './logo1.png';


const element = (
        <div>
          <h1>Simple Website</h1>
          <br />
          <p>This is a simple website made without React. Try to convert this into React enabled.
  </p>
          <br />
  
          <div>
            <ol>
              <li>First, you need to use create-react-app</li>
              <li>Second, you need to run npm start</li>
            </ol>
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={logo} style={{ height: 200, width: 200}} />
  </div>
          </div>
        </div>
      )


ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
