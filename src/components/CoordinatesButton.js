import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleReceiveCoordinates = (event) => {
        debugger
        let x = event.clientX
        let y = event.clientY
        return this.props.onReceiveCoordinates([x,y])
    }

    render() {
        return (
            <button onClick={this.handleReceiveCoordinates}>Get Coordinates</button>
        )
    }
}
