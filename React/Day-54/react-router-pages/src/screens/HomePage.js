import * as React from 'react';
import GoBack from '../components/GoBack'


export default class HomePage extends React.Component {
     render(){
        return (
            <div>
                <GoBack />
                <h1>Welcome to the page, this is our home.</h1>
            </div>
        )
    }
}