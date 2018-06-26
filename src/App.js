import React, {Component} from 'react';
import './App.css';
import {simpleAction} from './actions/SimpleAction'
import {connect} from "react-redux";

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction()
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.simpleAction}>Test redux action</button>
                <div>
                    <pre>{JSON.stringify(this.props)}</pre>
                </div>
            </div>)
    }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = dispatch => ({simpleAction: () => dispatch(simpleAction())})
export default connect(mapStateToProps, mapDispatchToProps)(App)
