import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import logoJedi from '../assets/logo-jedi.png';

import './App.css';

import { fetchJedi, resetMessage } from '../redux/reducer';
import Jedi from "./jedi/Jedi"
import JediForm from "./jedi/JediForm"
import Message from "./message/Message"

function mapStateToProps(state) {
  return {
    jedi: state.jedi.list,
    message: state.jedi.message,
    isSuccess: state.jedi.isSuccess,
  };
}

class App extends Component {

  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this.props.dispatch(fetchJedi());
  }

  resetMessage() {
    this.props.dispatch(resetMessage());
  }

  render() {
    const { jedi, message, isSuccess } = this.props;

    const jediList = jedi.map((jedi, index) => (
      <Jedi key={index} jedi={jedi}/>
    ))

    return (
      <div className="App">
        <div className="App__header">
          <img src={logoJedi} className="App__logo" alt="logo" />
        </div>
        <div className="App__content">
          {(message)
            ? <Message message={message} isSuccess={isSuccess} reset={this.resetMessage.bind(this)}/>
            : null
          }
          <JediForm />
          {jediList}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
};

export default connect(
  mapStateToProps,
)(App);
