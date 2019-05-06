import * as React from 'react';

import LinkList from './LinkList';
import SearchBar from './SearchBar';

import { connect } from 'react-redux';
import { ListLinksFromAPIAction } from '../redux/links/actions';
import { IRootState } from '../redux/store'

import logo from '../logo.svg';

import './ViewLinks.css';

class ViewLinks extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.loadLinks();
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="profileDiv col-4">
                        <img src={logo} className="App-logo" alt="logo" />
                            <div>
                                <div className="profileName">King of JavaScript</div>
                                <div> 69 Favourited Links </div>
                            </div>
                    </div>
                    <div className="col-8">
                    <SearchBar onSearchChange={this.onSearchBarChanged} />
                    <LinkList links={this.props.links} />
                    </div>
                </div>
            </div>
        );
    }

    onSearchBarChanged = (search) => {
        this.props.loadLinks(search);
    }
}

const mapStateToProps = (state) => {
    return {
        links: state.links.linkList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadLinks: (search) => {
            dispatch(ListLinksFromAPIAction(search|| ''))
        }
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(ViewLinks);