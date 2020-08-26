import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AddPokemon from './Pages/AddPokemon';
import ManagePokemon from './Pages/managePokemon'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ManagePokemon} />
          <Route path="/newPoke" component={AddPokemon} />
        </Switch>
      </div>

      
    </Router>
  );
}

export default App;
