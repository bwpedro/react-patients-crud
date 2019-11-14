import React from 'react';
import {Link} from 'react-router-dom';

const Summary = ({patient}) => {
  var route = '/paciente/' + patient.id;
  return (
    <div className='card z-depth-0 patient-summary'>
      <div className='card-content grey-text text-darken-3'>
        <Link to={route}>
          <span className='card-title'>{patient.nome} {patient.sobrenome}</span>
        </Link>
        <p>Observações: {patient.obs}</p>
        <p className='grey-text'>Nascimento: {patient.nascimento}</p>
      </div>
    </div>
  )
}

export default Summary