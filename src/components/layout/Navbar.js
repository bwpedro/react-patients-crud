import React from 'react';
import logo from '../../logoLink.png';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <nav className="nav-color">
      <div className="container">
        <ul className='left'>
          <img src={logo} onClick={handleDashboard} className="App-logo" alt="logo" />
        </ul>
        <SignedInLinks/>
      </div>
    </nav>
  )
}

function handleDashboard () {
  window.location.href = "/dashboard";
}

export default Navbar;