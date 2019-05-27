import * as React from 'react';
import { connect } from 'react-redux';
import {addLink, clearLink, spaceMan, deleteLink} from './redux/actions'

import axios from 'axios'

export class PureLinkList extends React.Component{

    loadSpaceMen=()=>{
        axios.get('http://api.open-notify.org/astros.json').then((response) => {
            let people = []
            response.data.people.map(person => {
                people.push(person.name)
            })
            console.log(people)
            this.props.loadSpace(people)
        })
    }

    render(){
        return (
        <div>
            <button onClick={this.props.addLink} >New Link </button>
            <button onClick={this.props.clearLink} >Clear Link </button>

            <h2>Links: </h2>
            {this.props.links.map((l, i)=>(
                <div key={i}>
                    {i}- {l.title} - {l.url}

                    
                    <button onClick={()=>{this.props.deleteLink(i)}}>Delete Link</button>
                </div>
            ))}
            {/*
            Exercise B
            We wrap this.props.deleteLink inside a function so that we do not cause an infinite loop when the component is rendered 
            This is for the deleteLink button above.
            */}

            <div>
                <button onClick={this.loadSpaceMen}>Load SpacePeople </button>

                {this.props.spacePeople.map((p, i)=>(
                    <div key={i}>
                    {p }
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
    return{
        addLink: () => 
        dispatch(addLink('Xccelerate', "https://xccelerate.co")),
        clearLink: ()=>
        dispatch(clearLink()),
        loadSpace: (people)=>
        dispatch(spaceMan(people)),

        //exercise B
        deleteLink: (i) =>
        dispatch(deleteLink(i))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PureLinkList);