import * as React from 'react';
import GoBack from '../components/GoBack'


export default class NoMatch extends React.Component {
     render(){
        return (
            <div>
                <GoBack />
                <h1>No Page found, 404 error, please get better at coding...</h1>
            </div>
        )
    }
}