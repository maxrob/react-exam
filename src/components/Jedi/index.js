import React, { PropTypes } from 'react';
import './index.css';

const Jedi = ({ jedi }) => (
  <div className="Jedi">
    <p className="Jedi__header">Matricule: #{jedi.id}</p>
    <p className="Jedi__content">{jedi.name}</p>
  </div>
);

Jedi.propTypes = {
  jedi: PropTypes.object,
};

export default Jedi;
