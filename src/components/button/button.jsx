import React, { Component } from 'react';
import {connect} from 'react-redux';

import {} from 'com'

class Button extends Component {
    wait = () => {
        this.props.dispatch({type: "WAIT"});
    };

    setName = () => {
        this.props.dispatch({type: "SET_NAME", payload: "Bob"});
    };

    cancel = () => {
        this.props.dispatch({type: "CANCEL"});
    };

    render() {
        return (
            <div>
                <button onClick={this.wait}>wait</button>
                <button onClick={this.setName}>click</button>
                <button onClick={this.cancel}>cancel</button>
            </div>
        );
    }
}

export const ButtonConnected = connect()(Button);
