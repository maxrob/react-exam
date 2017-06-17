import React, { Component } from 'react';

import './Jedi.css';

class Jedi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jedi: null
    };
  }

  componentWillMount() {
    this.setState({
      jedi: this.props.jedi
    })
  }


  render() {
    const {jedi} = this.state

    return (
      <div className="Jedi">
        <p className="Jedi__header">Matricule: #{jedi.id}</p>
        <p className="Jedi__content">{jedi.name}</p>
      </div>
    );
  }
}

export default Jedi
