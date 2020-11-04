import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    

    handleClick = (e) => {
        let coords = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    } 
}