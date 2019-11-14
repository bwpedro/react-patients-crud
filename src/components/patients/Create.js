import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPatient, getPatients, updatePatient} from '../../store/actions/patientActions';

var id, currentPatient;

class Create extends Component {
  state = {
    id : '',
    nome: '',
    sobrenome: '',
    cpf: '',
    rg: '',
    nascimento: '',
    sexo: '',
    obs: ''
  }

  UNSAFE_componentWillMount() {
    id = this.props.match.params.id;
    if(this.props.patient !== undefined){
      currentPatient = this.props.patient.find(patient => {
        return patient.id === id
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(currentPatient !== undefined){
      this.state.id = currentPatient.id;
      if(this.state.nome === "")
        this.state.nome = currentPatient.nome;
      if(this.state.sobrenome === "")
        this.state.sobrenome = currentPatient.sobrenome;
      if(this.state.cpf === "")
        this.state.cpf = currentPatient.cpf;
      if(this.state.rg === "")
        this.state.rg = currentPatient.rg;
      if(this.state.nascimento === "")
        this.state.nascimento = currentPatient.nascimento;
      if(this.state.sexo === "")
        this.state.sexo = currentPatient.sexo;
      if(this.state.obs === "")
        this.state.obs = currentPatient.obs;

      this.props.updatePatient(this.state);
    } else {
      this.props.createPatient(this.state);
    }
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Cadastrar Paciente</h5>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome' defaultValue={currentPatient ? currentPatient.nome : this.state.nome} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='sobrenome'>Sobrenome</label>
            <input type='text' id='sobrenome' defaultValue={currentPatient ?  currentPatient.sobrenome : this.state.sobrenome} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined? '' : 'input-field'}>
            <label htmlFor='cpf'>CPF</label>
            <input type='number' id='cpf' defaultValue={currentPatient ?  currentPatient.cpf : this.state.cpf} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='rg'>RG</label>
            <input type='number' id='rg' defaultValue={currentPatient ?  currentPatient.rg : this.state.rg} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='nascimento'>Nascimento</label>
            <input type='text' id='nascimento' defaultValue={currentPatient ?  currentPatient.nascimento : this.state.nascimento} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='sexo'>Sexo</label>
            <input type='text' id='sexo' defaultValue={currentPatient ?  currentPatient.sexo : this.state.sexo} onChange={this.handleChange}/>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <label htmlFor='obs'>Observações</label>
            <textarea className='materialize-textarea' id='obs' defaultValue={currentPatient ?  currentPatient.obs : this.state.obs} onChange={this.handleChange}></textarea>
          </div>
          <div className={currentPatient !== undefined ? '' : 'input-field'}>
            <button className='button btn z-depth-0'>{id === undefined ? 'Cadastrar' : 'Atualizar'}</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPatient: (patient) => dispatch(createPatient(patient)),
    updatePatient: (patient) => dispatch(updatePatient(patient)),
  }
}

const mapStateToProps = (state) => {
  return {
    patient: state.patient.patients,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)