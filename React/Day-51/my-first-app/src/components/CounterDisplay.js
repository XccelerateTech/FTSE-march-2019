import * as React from 'react'
import Counter from './Counter'

export default class CounterDisplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfCounters: 0
    }
  }

addCounter = () => {
  this.setState({
    numberOfCounters: this.state.numberOfCounters +1
  })
}

  render() {
    const counters = [];
    for (let i = 0; i < this.state.numberOfCounters; i++) {
      counters.push(<Counter key={i} number={i.toString()} />)
    }
    return (
      <div>
        <button onClick={this.addCounter}>Add Counter</button>
        {counters}
      </div>
    )
  }

}




