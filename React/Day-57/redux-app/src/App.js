import * as React from 'react';

import { AddTeamForm } from './components/AddTeamForm'
import { TeamList } from './components/TeamList'
import {StockList} from './components/StockList'



export default class App extends React.Component {
    render (){
        return (
            <div>
                <h1>This is a Page</h1>
                <AddTeamForm />

<br />
<TeamList />

<br />
<StockList />


            </div>
        )
    }
}