import RandomName from 'node-random-name'
import React from 'react';
import Counter from './Counter'


class LeaderBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counters: [{ name: RandomName({ seed: Math.random() }), count: 0 }, { name: RandomName(), count: 2 }],
        }

    }

    addCounter = () => {
        this.setState({
            counters: this.state.counters.concat([{ name: RandomName({ seed: Math.random() }), count: 0 }])
        })
    }

    removeCounter = (i) => {
        this.setState({
            counters: this.state.counters,
        })

    }

    renderCounter(i, name, count) {
        return (<Counter count={count} name={name} key={i}
            onClick={() => this.handleClickPlus(i)}
            onMouseDown={() => this.handleClickMinus(i)}
            onButtonPress={() => this.removeCounter(i)} />
        );

    }

    handleClickPlus(i) {
        let newObj = { ... this.state.counters[i], count: this.state.counters[i].count + 1 }

        let newArray = [... this.state.counters];
        newArray[i] = newObj
        this.setState({
            counters: newArray
        })
    }

    handleClickMinus(i) {
        let newObj = { ... this.state.counters[i], count: this.state.counters[i].count - 1 }

        let newArray = [... this.state.counters];
        newArray[i] = newObj
        this.setState({
            counters: newArray
        })
    }
    render() {


        // Exercise - 1
        const sortedData = [].concat(this.state.counters)
            .sort((a, b) => b.count - a.count)
            .map((item, i) =>
                <div key={i}>
                    {item.name}
                </div>
            )


        return (

            <div>
                <div>
                    <button onClick={this.addCounter}>Add Counter</button>
                </div>


                {
                    this.state.counters.map((counter, index) => this.renderCounter(index, counter.name, counter.count))
                }
                <div>
                    <br />
                    <br />
                    <h3>LeaderBoard</h3>
                    {sortedData}
                </div>

            </div>
        );
    }
}

export default LeaderBoard;