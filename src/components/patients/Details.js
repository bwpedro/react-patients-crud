import React from 'react'
import {connect} from 'react-redux';
import { deletePatient} from '../../store/actions/patientActions';
import {Link} from 'react-router-dom';

var currentPatient, id;

function Details(props) {

  id = props.match.params.id;

  if(props.patient !== undefined){
    currentPatient = props.patient.find(patient => {
      return patient.id === id
    })
  }

  if(currentPatient){
    return (
      <div className='container'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'>{currentPatient.nome} {currentPatient.sobrenome}</span>
            <p>Observações: {currentPatient.obs}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>CPF: {currentPatient.cpf}</div>
            <div>RG: {currentPatient.rg}</div>
            <div>Nascimento: {currentPatient.nascimento}</div>
            <div>Sexo: {currentPatient.sexo}</div>
          </div>
          <div className='input-field'>
            <Link to={"/cadastrar/paciente/"+currentPatient.id}><button className='button btn edit'>Editar</button></Link>
            <button className='button btn edit delete' onClick={props.deletePatient}>Excluir</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <p>Não é possível acessar a URL diretamente. Volte ao início e selecione um paciente para ver os detalhes.</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePatient: () => dispatch(deletePatient(id)),
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patient.patients,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
