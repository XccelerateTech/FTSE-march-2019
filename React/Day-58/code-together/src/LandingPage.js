import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import { connect} from 'react-redux'


import HomePage from './screens/HomePage';
import ShoppingListPage from './screens/ShoppingListPage';
import LeaderBoardPage from './screens/LeaderBoardPage';
import QuestionerPage from './screens/QuestionerPage';
import AboutUsPage from './screens/AboutUsPage';
import ClockPage from './screens/ClockPage';
import CurrencyPage from './screens/CurrencyPage';
import Login from './screens/Login';
import InfoPage from './screens/InfoPage';

import Secret from './components/Secret';
import NoMatch from './screens/NoMatch';

export default class LandingPage extends React.Component {
  render(){

    const PurePrivateRoute = ({ component, isAuthenticated, ...rest}) => {
      const Component = component;
      if(Component != null){
        return (
          <Route {...rest} render={(props) => (
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={ {
                pathname: '/login',
                state: {from: props.location}
              }} />
            )
          )} />
        )
      } else {
        return null;
      }
    }

    const PrivateRoute = connect((state) => ({
      isAuthenticated: state.auth.isAuthenticated
    }))(PurePrivateRoute)


    return (
     <div>

       <BrowserRouter>
       <NavBar />

       <Switch>
         <PrivateRoute exact path='/' component={HomePage} />
         <PrivateRoute  path='/shoppingList' component={ShoppingListPage} />
         <PrivateRoute  path='/leaderBoard' component={LeaderBoardPage} />
         <PrivateRoute  path='/questioner' component={QuestionerPage} />
         <PrivateRoute  path='/aboutUs' component={AboutUsPage} />
         <PrivateRoute  path='/clock' component={ClockPage} />
         <PrivateRoute  path='/currency' component={CurrencyPage} />
         <PrivateRoute  path='/secretPage' component={Secret} />
         <PrivateRoute  path='/infoPage' component={InfoPage} />

         <Route path='/login' component={Login} />


         <Route component={NoMatch} />

       </Switch>
       </BrowserRouter>

       </div> 
    )
  }
}
