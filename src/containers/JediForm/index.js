import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addJedi, setSuccess, setError } from '../../reducers/actions'
import './index.css';

class JediForm extends Component {

  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    // AutoBind
    // TODO Use babel plugin for this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ name: value });
  }

  handleSubmit() {
    const { props: { addJedi, setSuccess, setError }, state : { name } } = this;

    if (!this.isFormValid()) {
      return setError('Le nom du jedi est requis');
    }

    addJedi(name);
    setSuccess(`Le jedi ${ name } a été ajouté`);
    this.setState({ name: '' });
  }

  isFormValid() {
    return (this.state.name)
  }

  render() {
    const { name } = this.state;

    return (
      <div className="JediForm">
        <input
          className="JediForm__name"
          placeholder="Nom du jedi"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <button className="JediForm__submit" onClick={ this.handleSubmit }>Ajouter</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addJedi,
  setSuccess,
  setError,
};

JediForm.propTypes = {
  addJedi: PropTypes.func,
  setSuccess: PropTypes.func,
  setError: PropTypes.func
}

export default connect(null, mapDispatchToProps)(JediForm);
