import {Link} from 'react-router-dom';
import * as React from 'react';

export default class NavBar extends React.Component {
    render(){
        return(
            <div>
                <Link to='/shoppingList'>Shopping List</Link>
                <Link to='/leaderBoard'>Counter Leaderboard</Link>
                <Link to='/questioner'>Questioner</Link>
                <Link to='/aboutUs'>About Us</Link>
                <Link to='/clock'>Clock Timer</Link>
                <Link to='/currency'>Currency Converter</Link>

            </div>
        )
    }
}

