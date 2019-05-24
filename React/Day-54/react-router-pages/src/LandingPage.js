import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

import HomePage from './screens/HomePage';
import ShoppingListPage from './screens/ShoppingListPage';
import LeaderBoardPage from './screens/LeaderBoardPage';
import QuestionerPage from './screens/QuestionerPage';
import AboutUsPage from './screens/AboutUsPage';
import ClockPage from './screens/ClockPage';
import CurrencyPage from './screens/CurrencyPage';
import Secret from './components/Secret';
import NoMatch from './screens/NoMatch';

export default class LandingPage extends React.Component {
  render(){
    return (
     <div>
       <BrowserRouter>
       <NavBar />

       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route  path='/shoppingList' component={ShoppingListPage} />
         <Route  path='/leaderBoard' component={LeaderBoardPage} />
         <Route  path='/questioner' component={QuestionerPage} />
         <Route  path='/aboutUs' component={AboutUsPage} />
         <Route  path='/clock' component={ClockPage} />
         <Route  path='/currency' component={CurrencyPage} />
         <Route  path='/secretPage' component={Secret} />


         <Route component={NoMatch} />

       </Switch>
       </BrowserRouter>

       </div> 
    )
  }
}
