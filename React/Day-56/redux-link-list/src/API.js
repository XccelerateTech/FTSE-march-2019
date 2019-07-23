// API call without redux thunk from a components function. 

import * as React from 'react';
import axios from 'axios';

export default class API extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spacePeople: []
        }
    }

    spacePeople = () => {
        axios.get('http://api.open-notify.org/astros.json').then((response) => {
            let people = []
            response.data.people.map(person => {
                people.push(person.name)
            })

            this.setState({
                spacePeople: people
            })
        })
    }

    renderPeople = () => {
        if (this.state.spacePeople.length > 0) {
            return (
                this.state.spacePeople.map((person, i) => (
                    <div key={i}>
                        {person}
                    </div>
                )
                ))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.spacePeople}>Call Space People</button>
                {this.renderPeople()}
            </div>
        )
    }
}