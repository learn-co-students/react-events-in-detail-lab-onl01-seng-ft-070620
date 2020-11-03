import React from 'react'


class DelayedButton extends React.Component {

    delayFunction = (event) => {
        event.persist()
        window.setTimeout( () => this.props.onDelayedClick(event), this.props.delay);
    }

    render() {
        return <button onClick={this.delayFunction}> Delayed </button>
    }

}
export default DelayedButton