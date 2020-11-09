import React, { Component } from 'react'

export default class DelayedButton extends Component {  
    handleDelayedButton = (event) => {
        event.persist()
        setTimeout( () => {this.props.onDelayedClick(event)},
        this.props.delay)
    }
    render() {
        return (
            <button onClick={this.handleDelayedButton}>Delay Button</button>
        )
    }
}
