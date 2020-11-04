import React, {Component} from "react"

export default class CoordinatesButton extends Component {
  displayCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.displayCoordinates}>Coordinates Button</button>
    )
  }

}
