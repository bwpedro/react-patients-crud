import React, {Component} from 'react';
import List from '../patients/List';
import {connect} from 'react-redux';
import { getPatients } from '../../store/actions/patientActions';

class Dashboard extends Component {
  
  UNSAFE_componentWillMount() {
    this.props.getPatients();
  }

  render(){

    const {patients} = this.props;

    if (patients === undefined || patients.length === 0){
      return(
          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m8">
                <div className='card z-depth-0 patient-summary'>
                  <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>Não há pacientes cadastrados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    } else {
      return(
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m8">
              <List patients={patients}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patient.patients,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPatients: () => dispatch(getPatients()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)