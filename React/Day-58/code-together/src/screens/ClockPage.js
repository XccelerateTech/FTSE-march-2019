import * as React from 'react';
import Timer from '../components/Timer';
import {Button} from 'reactstrap'
import Clock from '../components/Clock';
import { logoutNow } from '../redux/auth/actions'
import { connect } from 'react-redux'


export class TimerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTimers: 0
    };
  }

  logout = () => {
    this.props.logout()
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
          <button onClick={this.logout}>Now you can Logout</button>

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

const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => {
          dispatch(logoutNow())
      }
  }
}
export default connect(null, mapDispatchToProps)(TimerPage)
