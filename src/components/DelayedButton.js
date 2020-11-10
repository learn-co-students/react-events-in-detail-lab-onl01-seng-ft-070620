import React, { Component } from 'react';

export default class DelayedButton extends Component {
    onHandleClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return <button onClick={this.onHandleClick}>Delay Click</button>
    }
}