import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import { AddLinkActionThunk, AddTagActionThunk } from '../redux/links/actions';

import axios from 'axios';

import './AddButton.css';

export class PureAddButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            tags: [],
            title: '',
            url: '',
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Add Link</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Link Form</ModalHeader>
                    <ModalBody>
                        Name: <br />
                        <input type="text" onChange={this.onNameChange} value={this.state.title} /> <br />
                        URL: <br />
                        <input type="text" onChange={this.onURLChange} value={this.state.url} /> <br />
                        Tags: <br />
                        {this.state.tags.map((tag, i) => {
                            return <input key={i} type="text" onChange={this.onTagChange.bind(this, i)} value={tag.name} />
                        })}
                        <br />
                        <button onClick={this.addTag}>Add Tag</button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addLink}>Submit</Button>
                        <Button color="danger" onClick={this.toggle}>Cancel </Button>
                    </ModalFooter>

                </Modal>
            </div>
        );
    }

    onNameChange = (e) => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    onURLChange = (e) => {
        this.setState({
            url: e.currentTarget.value
        })
    }

    onTagChange = (i, e) => {

        const tags = this.state.tags.slice();
        tags[i] = {
            name: e.currentTarget.value
        };
        this.setState({
            tags: tags
        })
    }

    addLink = () => {
        this.props.addLink(
            {
                tags: this.state.tags,
                title: this.state.title,
                url: this.state.url
            }
        );
        const tags = this.state.tags
        for (let tag of tags) {
            console.log(tag.name)
            this.props.addTag(
                {
                    name: tag.name
                }
            )
        }

        this.setState({
            modal: false,
            tags: [],
            title: '',
            url: ''
        })
    }

    addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{
                name: ''
            }])
        })
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.links.linkList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLink: (link) => {
            dispatch(AddLinkActionThunk(link))
        },
        addTag: (tag) => {
            dispatch(AddTagActionThunk(tag))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PureAddButton);