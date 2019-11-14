import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li onClick={handleDashboard}><NavLink to='/dashboard'>Listar Pacientes</NavLink></li>
      <li><NavLink to='/cadastrar/paciente'>Cadastrar Paciente</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>PB</NavLink></li>
    </ul>
  )
}

function handleDashboard () {
  window.location.href = "/dashboard";
}

export default SignedInLinks;