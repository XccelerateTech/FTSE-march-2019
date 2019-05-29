import * as React from 'react';


export default class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            elapsed: 0
        };
    }

     componentDidMount() {
        this.startTime = Date.now();
        this.timer = window.setInterval(this.tick, 1)
    }

     componentWillUnmount() {
        clearInterval(this.timer);
    }

     render()  {
        return(
            <div>
                Time Elapsed: {(this.state.elapsed / 1000).toFixed(3)}s
            </div>
        )
    }

     tick = () => {
        this.setState({
            elapsed: Date.now() - this.startTime
        });
    }

}