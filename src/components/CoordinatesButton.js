// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component
{
    handleClick = (event) => {
        let coords = []
        coords.push(event.clientX)
        coords.push(event.clientY)
        this.props.onReceiveCoordinates(coords)
    }

    render()
    {
        return (<button onClick={this.handleClick}>Coords</button>)
    }
}