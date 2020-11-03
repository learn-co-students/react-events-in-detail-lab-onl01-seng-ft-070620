import React from 'react'


class CoordinatesButton extends React.Component {

    createArray = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x,y])
        }

    render() {
        return <button onClick= {this.createArray}> Mouse Coords </button>
    }
}
export default CoordinatesButton