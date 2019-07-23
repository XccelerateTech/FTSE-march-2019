import * as React from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../redux/team/actions'

class PureAddTeamForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: ''
        }
    }

    render(){
        return (
            <div>
                <input value={this.state.name} onChange={this.onNameChange} />
                <button onClick={this.addTeam}> Add a Team </button>
            </div>
        )
    }

    onNameChange=(e)=>{
        let name = e.target.value
        this.setState=({
            name: name
        })
    }

    addTeam = () => {
        this.props.onTeamAdd(this.state.name)
        this.setState({
            name: ''
        })
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTeamAdd:(name) => {
            dispatch(addTeam(name))
        }
    }
}

export const AddTeamForm = connect(mapStateToProps, mapDispatchToProps)(PureAddTeamForm);
