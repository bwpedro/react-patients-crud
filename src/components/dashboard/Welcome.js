import React from 'react';
import logo from '../../logo.png'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={logo} className="welcome-logo" alt="logo"/>
      <p>Developed by Pedro Warmling Botelho</p>
    </div>
  )
}

export default Welcome