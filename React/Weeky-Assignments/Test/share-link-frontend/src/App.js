import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux'

import Navbar from 'reactstrap/lib/Navbar';
import NavItem from 'reactstrap/lib/NavItem';
import AddButton from './components/AddButton';
import ViewLinks from './components/ViewLinks';
import Login from './components/Login';
import UsersPage from './components/UsersPage'

import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line


const Group = () => <div>Groups</div>;

const PurePrivateRoute = ({
  component, isAuthenticated, ...rest
}) => {
  const Component = component;
  if(Component != null){
    return (
      <Route {...rest} render={(props)=> (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to= { { 
            pathname: '/login',
            state: {from: props.location}
          }} />
        )
      )} />
    )
  } else {
    return null;
  };
};

const PrivateRoute = connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PurePrivateRoute);

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
            <NavItem>
              <Link to='/users'>Users</Link>
            </NavItem>
            <NavItem>
              <Link to='/groups'>Groups</Link>
            </NavItem>
            <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
        </Navbar>

      <Route path='/login' component={Login} />
      <PrivateRoute exact={true} path="/" component={ViewLinks} />
      <PrivateRoute path="/addButton" component={AddButton} />
      <PrivateRoute path='/users' component={UsersPage} />
      <PrivateRoute path='/groups' component={Group} />
      </div>
    </Router>
    )
  }
}


export default App;