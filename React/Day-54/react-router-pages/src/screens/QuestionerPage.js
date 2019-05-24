import * as React from 'react';
import Questioner from '../components/Questioner'
import GoBack from '../components/GoBack'


export default class QuestionerPage extends React.Component {
     render(){
        return (
            <div>
                <GoBack />
                <Questioner question="What is your favourite colour?" />
                </div>
        )
    }
}