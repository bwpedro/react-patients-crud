import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import Welcome from './components/dashboard/Welcome'
import Details from './components/patients/Details'
import Create from './components/patients/Create'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/paciente/:id' component={Details}/>
          <Route exact path='/cadastrar/paciente' component={Create}/>
          <Route path='/cadastrar/paciente/:id' component={Create}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;