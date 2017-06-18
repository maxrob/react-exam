import React, { PropTypes } from 'react';
import './index.css';

const Message = ({
  message,
  isSuccess,
  reset
}) => {
  const style = {
    background: (isSuccess) ? "#0a0" : "#a00"
  };

  return (
    <div className="Message" style={style}>
      <p className="Message__content">{message}</p>
      <a href="#" onClick={reset} className="Message__close">x</a>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
  reset: PropTypes.func,
};

export default Message;
