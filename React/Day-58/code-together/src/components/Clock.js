
import React from 'react';

/*
Clock is an :
In object-oriented programming with classes, an instance variable is a variable defined in a class (i.e. a member variable ), for which each instantiated object of the class has a separate copy, or instance. An instance variable is similar to a class variable.[1] An instance variable is a variable which is declared in a class but outside the constructor and the method/function. Instance variables are created when an object is instantiated, and are accessible to all the methods, the constructor and block in the class. Access modifiers can be given to the instance variable.
*/

class Clock extends React.Component {
  Clock
    constructor(props) {
        super(props);
        
        const currentTime = new Date(),
            hours = currentTime.getHours(),
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            ampm = hours >= 12 ? 'Pm' : 'Am';

        this.state = {
            currentTime,
            hours,
            minutes,
            seconds,
            ampm
        }

        this.updateClock = this.updateClock.bind(this);
    }
    updateClock() {
        const currentTime = new Date();
        let hours = currentTime.getHours()
        let minutes = currentTime.getMinutes()
        let seconds = currentTime.getSeconds()
        let ampm = hours >= 12 ? 'Pm' : 'Am';

        this.setState({
            currentTime,
            hours,
            minutes,
            seconds,
            ampm

        });
    }

    componentDidMount(){
        this.Clock = window.setInterval(this.updateClock, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.Clock);
    }

    //this prevents memory leak which is where a function is trying to run but cannot access its state

    render() {

        const { hours, minutes, seconds, ampm } = this.state;

        return (
            <div className="clock">
                {
                    hours === 0 ? 12 :
                        (hours > 12) ?
                            hours - 12 : hours
                } : {
                    minutes > 9 ? minutes : `0${minutes}`
                } : {
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }

    
}

export default Clock;

