import React from 'react';
import Summary from './Summary'

const List = ({patients}) => {
  return (
    <div className='patient-list section'>
      {patients.id !== "" && patients.map(patient => {
        return (
          <Summary patient={patient} key={patient.id}/>
        )
      })}
    </div>
  )
}

export default List