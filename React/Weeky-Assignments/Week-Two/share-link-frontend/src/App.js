// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Navbar from 'reactstrap/lib/Navbar';
import NavItem from 'reactstrap/lib/NavItem';
import AddButton from './components/AddButton';
import ViewLinks from './components/ViewLinks';import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line

class App extends React.Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Navbar dark={true}>
            <h3>Xccelerate Links</h3>
            <NavItem>
              <Link to='/'>SHOW LINKS</Link>
            </NavItem>
            <NavItem>
              <Link to='/addButton'>Add LINKS</Link>
            </NavItem>
        </Navbar>

      <Route exact={true} path="/" component={ViewLinks} />
      <Route path="/addButton" component={AddButton} />
      </div>
    </Router>
    )
  }
}

export default App;