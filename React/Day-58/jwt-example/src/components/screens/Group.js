import * as React from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../../redux/group/actions';

 class PureGroup extends React.Component {
  componentWillMount() {
    this.props.reloadGroup();
  }

  render() {
    return (
      <div>
        
        {this.props.groups.map(group => (
          <ul className="list-group" key={group.id}>
              <li className="list-group-item">{group.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export const Group = connect(
  (state) => ({
    groups: state.group.groups
  }),
  (dispatch) => ({
    reloadGroup: () => dispatch(fetchGroups())
  })
)(PureGroup);