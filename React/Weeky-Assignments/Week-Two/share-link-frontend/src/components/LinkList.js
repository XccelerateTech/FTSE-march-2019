import * as React from 'react';
import LinkItem from './LinkItem';

export default class LinkedList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.links.map((link, i)=> (
                    <LinkItem
                        key={i}
                        title={link.title}
                        url={link.url}

                        // tags={link.tags}
                    />
                ))}
            </div>
        );
    }
}