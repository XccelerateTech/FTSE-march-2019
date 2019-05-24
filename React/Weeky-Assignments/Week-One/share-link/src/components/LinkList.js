import * as React from 'react';

export default class LinkList extends React.Component {
    render (){
        return (
            <div>
                {this.props.links.map((link, i)=> (
                    <div key={i}>
                    <a href={link.url}>{link.name}</a>

                    {link.tags.map((tag, j)=>(
                        <span key={j}>{tag.name}</span>
                    ))}
                    </div>
                ))}
            </div>
        )
    }
}