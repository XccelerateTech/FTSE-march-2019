import * as React from 'react';
import Timer from '../components/Timer';
import {Button} from 'reactstrap'
import Clock from '../components/Clock';


export default class TimerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTimers: 0
    };
  }




  render() {

    

    const timers = [];
    for (let i = 0; i < this.state.numberOfTimers; i++) {
      timers.push(<Timer key={i} />);
    }

    return (
      <div>
       
        <div>
          <Button color="success" onClick={this.onAddTimer}>Add Timer</Button>
          <Button color="danger" onClick={this.onClearTimer}>Reset</Button>
          {timers}

          <Clock />
        </div>
      
      </div>
    );
  }
  onAddTimer = () => {
    this.setState({
      numberOfTimers: this.state.numberOfTimers + 1
    })
  }
  onClearTimer = () => {
    this.setState({
      numberOfTimers: 0
    })
  }
}

