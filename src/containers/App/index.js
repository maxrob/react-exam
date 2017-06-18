import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import logoJedi from '../../assets/logo-jedi.png';
import './index.css';

import { fetchJedi, resetMessage } from '../../reducers/actions';
import Jedi from "../../components/Jedi/index"
import JediForm from "../JediForm/index"
import Message from "../../components/Message/index"

class App extends Component {

  /**
   * Constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.props.fetchJedi();
  }

  /**
   * Render
   */
  render() {
    const { props: { jedi, message, isSuccess, resetMessage } } = this;

    const jediList = jedi.map((jedi, index) => <Jedi key={index} jedi={jedi}/>)
    const displayMessage = (message) ? <Message message={message} isSuccess={isSuccess} reset={resetMessage}/> : null;

    return (
      <div className="App">
        <div className="App__header">
          <img src={logoJedi} className="App__logo" alt="logo" />
          <h2>Académie des jedi</h2>
        </div>
        <div className="App__content">
          {displayMessage}
          <JediForm />
          {jediList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jedi: state.jedi.list,
    message: state.jedi.message,
    isSuccess: state.jedi.isSuccess,
  };
}

const mapDispatchToProps = {
  fetchJedi,
  resetMessage,
}

App.propTypes = {
  jedi: PropTypes.array,
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
  fetchJedi: PropTypes.func,
  resetMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps,)(App);
