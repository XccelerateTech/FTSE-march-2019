import * as React from 'react';
import {withRouter} from 'react-router-dom'

class GoBack extends React.Component{
  constructor(props) {
    super(props);
  }

  goBack = () => {
    // the history object of the `this.props` here can do goBack(), push()
    //   or replace() to change the route programmatically
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
      </div>
    );
  }
}

export default GoBack = withRouter(GoBack);