import * as React from 'react';
import Timer from './Timer';

import ShoppingList from './ShoppingList'
import CurrencyConverter from './CurrencyConverter'

import {Button} from 'reactstrap'


export default class TimerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTimers: 0
    };
  }




  render() {

    const shopping = [
      { id: 0, item: "Apples" },
      { id: 1, item: "Minced Pork" },
      { id: 2, item: "Eggs" },
      { id: 3, item: "Flour" }]


    const timers = [];
    for (let i = 0; i < this.state.numberOfTimers; i++) {
      timers.push(<Timer key={i} />);
    }

    return (
      <div>
        <h1>Welcome to React</h1>
        <h3>Currency Converter</h3>
        <CurrencyConverter />
        <div>
          <Button color="success" onClick={this.onAddTimer}>Add Timer</Button>
          <Button color="danger" onClick={this.onClearTimer}>Reset</Button>
          {timers}
        </div>
        <div>
          <ShoppingList list={shopping} />
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

