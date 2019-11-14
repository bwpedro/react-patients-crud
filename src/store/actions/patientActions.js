import axios from 'axios'

var urlRequest = ''; // aws url

export const createPatient = (patient) => {

  var input = '{"nome" : "'+patient.nome+'", "sobrenome" : "'+patient.sobrenome+'", "cpf" : "'+patient.cpf+'", "rg" : "'+patient.rg+'", "nascimento" : "'+patient.nascimento+'", "sexo" : "'+patient.sexo+'", "obs" : "'+patient.obs+'"}';
  input = JSON.parse(input);

  return (dispatch, getState) => {
    axios.post(urlRequest, input)
    .then((result) => {
      dispatch({type: 'CREATE_PATIENT', patient: patient});
    })
    .catch((error) => {
      dispatch({type: 'CREATE_PATIENT_ERROR', error});
    })
  }
}

export const getPatients = (id = null) => {

  if(id !== null)
    urlRequest += '?id='+id

  return (dispatch, getState) => {
    axios.get(urlRequest)
    .then((result) => {
      dispatch({type: 'GET_PATIENTS', patients: result.data});
    })
    .catch((error) => {
      dispatch({type: 'GET_PATIENTS_ERROR', error});
    })
  }
}

export const deletePatient = (id) => {

  urlRequest += '?id=' + id;

  return (dispatch, getState) => {
    axios.delete(urlRequest)
    .then((result) => {
      dispatch({type: 'DELETE_PATIENT', patient: result.data});
    })
    .catch((error) => {
      dispatch({type: 'DELETE_PATIENT_ERROR', error});
    })
  }
}

export const updatePatient = (patient) => {

  var input = '{"id" : "'+patient.id+'", "nome" : "'+patient.nome+'", "sobrenome" : "'+patient.sobrenome+'", "cpf" : "'+patient.cpf+'", "rg" : "'+patient.rg+'", "nascimento" : "'+patient.nascimento+'", "sexo" : "'+patient.sexo+'", "obs" : "'+patient.obs+'"}';
  input = JSON.parse(input);

  return (dispatch, getState) => {
    axios.put(urlRequest, input)
    .then((result) => {
      dispatch({type: 'UPDATE_PATIENT', patients: result.data});
    })
    .catch((error) => {
      dispatch({type: 'UPDATE_PATIENT_ERROR', error});
    })
  }
}