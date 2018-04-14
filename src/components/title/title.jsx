import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Title extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export const TitleConnected = connect(state => ({
    name: state.app.name,
}))(Title);

