import * as React from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

export default class CommentCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Card className="text-white bg-secondary">
                    <CardHeader>
                        <img src={this.props.image} />
                    </CardHeader>
                    <CardTitle>
                        <h2>{this.props.author}</h2>
                    </CardTitle>
                    <CardBody>
                    <CardText>
                        <p>Posted at {this.props.date}</p>
                        <p>{this.props.comment}</p>
                    </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}