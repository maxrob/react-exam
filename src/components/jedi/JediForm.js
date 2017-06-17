import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addJedi } from '../../redux/reducer'

import './Jedi.css';

function mapStateToProps(state) {
  return {};
}

class JediForm extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit() {
    if(this.isFormValid()) {
      this.props.dispatch(addJedi(this.state.name))
      this.setState({
        name: ''
      });
    }
  }

  isFormValid() {
    return (this.state.name)
  }

  render() {
    return (
      <div className="JediForm">
        <input className="JediForm__name" placeholder="Nom du jedi" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <button className="JediForm__submit" onClick={ this.handleSubmit }>Ajouter</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(JediForm);