const initState = {};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PATIENT':
      alert("Paciente cadastrado com sucesso!");
      return state;
    case 'CREATE_PATIENT_ERROR':
      alert("Erro ao cadastrar paciente!");
      return state;
    case 'GET_PATIENTS':
      return action;
    case 'GET_PATIENTS_ERROR':
      return state;
    case 'DELETE_PATIENT':
      alert("Paciente deletado com sucesso!");
      return state;
    case 'DELETE_PATIENT_ERROR':
      alert("Erro ao deletar paciente!");
      return state;
    case 'UPDATE_PATIENT':
      alert("Paciente atualizado com sucesso!");
      return state;
    case 'UPDATE_PATIENT_ERROR':
      alert("Erro ao atualizar paciente!");
      return state;
    default:
      return state;
  }
}

export default patientReducer;