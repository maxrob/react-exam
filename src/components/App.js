import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import logoJedi from '../assets/logo-jedi.png';

import './App.css';

import { fetchJedi } from '../redux/reducer';
import Jedi from "./jedi/Jedi"
import JediForm from "./jedi/JediForm"

function mapStateToProps(state) {
  return {
    jedi: state.jedi.list,
    errors: state.jedi.errors,
  };
}

class App extends Component {

  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this.props.dispatch(fetchJedi());
  }

  render() {
    const { jedi } = this.props;

    const jediList = jedi.map((jedi, index) => (
      <Jedi key={index} jedi={jedi}/>
    ))


    return (
      <div className="App">
        <div className="App__header">
          <img src={logoJedi} className="App__logo" alt="logo" />
        </div>
        <div className="App__content">
          <JediForm />
          {jediList}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(App);
