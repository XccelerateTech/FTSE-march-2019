import * as React from 'react';
import { connect } from 'react-redux';
import { addLink, clearLink, spaceManThunk, deleteLink, addSpaceMan } from './redux/actions'


export class PureLinkList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spaceMan: ''
        }
    }

    submitSpaceMan = (e) => {
        e.preventDefault()
        this.setState({
            spaceMan: ""
        })
        this.props.addSpace(this.state.spaceMan)

    }

    handleInputChange = (e) => {
        let name = e.target.value
        this.setState({
            spaceMan: name
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.props.addLink} >New Link </button>
                <button onClick={this.props.clearLink} >Clear Link </button>

                <h2>Links: </h2>
                {this.props.links.map((l, i) => (
                    <div key={i}>
                        {i}- {l.title} - {l.url}


                        <button onClick={() => { this.props.deleteLink(i) }}>Delete Link</button>
                    </div>
                ))}
                {/*
            Exercise B - Day 56
            We wrap this.props.deleteLink inside a function so that we do not cause an infinite loop when the component is rendered 
            This is for the deleteLink button above.
            */}

                <div>

                    {/*
                Exercise A - Day 57
                */}
                    <button onClick={this.props.loadSpace}>Load SpacePeople </button>
                    <input value={this.state.spaceMan} onChange={this.handleInputChange} />
                    <button onClick={this.submitSpaceMan}>Submit</button>

                    {this.props.spacePeople.map((p, i) => (
                        <div key={i}>
                            {p}
                        </div>
                    ))}
                </div>

            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        links: state.links,
        spacePeople: state.spacePeople
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLink: () =>
            dispatch(addLink('Xccelerate', "https://xccelerate.co")),
        clearLink: () =>
            dispatch(clearLink()),
        loadSpace: () =>
            dispatch(spaceManThunk()),
        /*
               Exercise A - Day 57
               */

        addSpace: (name) =>
            dispatch(addSpaceMan(name)),

        //exercise B
        deleteLink: (i) =>
            dispatch(deleteLink(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PureLinkList);