// Exercise A

import * as React from 'react';
import { connect } from 'react-redux';

const PureUserList = props => {
    return (
        <div>
            <h2>Users:</h2>
            {props.users.map((u, i) => (
                <div key={i}>
                    {u.firstName} {u.lastName} is {u.occupation} and is {u.age} years old.
                </div>
            ))}
        </div>
        );
    };

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export const UserList = connect(mapStateToProps)(PureUserList)