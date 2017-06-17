import React, { Component } from 'react';

import './Message.css';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null,
      style: null,
      reset: null
    };
  }

  componentWillMount() {
    this.setState({
      message: this.props.message,
      style: {
        background: (this.props.isSuccess) ? "#0a0" : "#a00"
      },
      reset: this.props.reset
    })
  }


  render() {
    const {message, style, reset} = this.state

    return (
      <div className="Message" style={style}>
        <p className="Message__content">{message}</p>
        <a href="#" onClick={reset} className="Message__close">x</a>
      </div>
    );
  }
}

export default Message
