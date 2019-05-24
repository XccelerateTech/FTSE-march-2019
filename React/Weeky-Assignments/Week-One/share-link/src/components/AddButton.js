import * as React from 'react';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default class AddButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            name: '',
            tags: [],
            url: ''
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.toggle}>Add Link</button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Add Link Form</ModalHeader>
                    <ModalBody>
                        Name:<br />
                        <input type='text' onChange={this.onNameChange} value={this.state.name} /><br />
                        URL:<br />
                        <input type='text' onChange={this.onURLChange} value={this.state.URL}/><br />
                        Tags:<br />
                        {this.state.tags.map((tag, i )=> {
                            return <input key={i} type='text' onChange={this.onTagChange.bind(this, i)} value={tag.name} />
                        })}
                        <br />
                        <button onClick={this.addTag}>Add Tag</button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addLink}>Submit</Button>
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    addLink = () => {
        this.setState({
            modal: false,
            name: '',
            url: '',
            tags: []
        })
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    }

    addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{
                name: ''
            }])
        })
    }

    onTagChange = (i, e) => {
        const tags = this.state.tags.slice()
        tags[i] = {
            name: e.currentTarget.value
        }
        this.setState({
            tags: tags
        })
    }

    onNameChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

    onURLChange = (e) => {
        this.setState({
            url: e.currentTarget.value
        })
    }
}