import * as React from 'react';
import { connect } from 'react-redux'
import { getInfo } from '../redux/information/actions'

export class InfoPage extends React.Component {

    getData = () => {
        this.props.getData()
    }

    render() {
        return (
            <div>
                <button onClick={this.getData}>Get information from backend!</button>

                {this.props.information.map(info => {
                    return (
                        <div>
                            <h3>{info.title}</h3>
                            <p>{info.content}</p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        information: state.info.information
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            dispatch(getInfo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)