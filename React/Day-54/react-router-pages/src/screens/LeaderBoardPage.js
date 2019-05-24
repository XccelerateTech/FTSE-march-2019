import * as React from 'react';
import LeaderBoard from '../components/LeaderBoard'
import GoBack from '../components/GoBack'


export default class LeaderBoardPage extends React.Component {
     render(){
        return (
            <div>
                <GoBack />
                <LeaderBoard />
            </div>
        )
    }
}