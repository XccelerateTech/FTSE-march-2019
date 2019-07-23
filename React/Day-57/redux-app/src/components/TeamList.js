import * as React from 'react';
import { connect } from 'react-redux'

class PureTeamList extends React.Component {
    render() {
        return (
            <div>
                {this.props.teams.map(team => (
                    <div>
                        {team.name}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teams: state.team.teamList
    }
}

export const TeamList = connect( mapStateToProps)(PureTeamList)