import * as React from 'react';

export default class LinkItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="listItem">
                <a id={this.props.id} href={this.props.url} target="blank">{this.props.title}</a>
            </div>
        )
    }
}