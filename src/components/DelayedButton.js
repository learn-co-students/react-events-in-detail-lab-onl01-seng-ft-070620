import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick} >Click this button!</button>
    )
  }
}

export default DelayedButton