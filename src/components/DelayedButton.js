import React, {Component} from "react"

export default class DelayedButton extends Component {
  delayedDisplay = (event) => {
    event.persist()
    // or const e = event ( and then passing in e to onDelayedClick() )
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayedDisplay}>Delayed Button</button>
    )
  }

}
