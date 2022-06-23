import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PokePage from './PokePage';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Pokemon PokeDex</h1>
      <Router>
        <div className='poke-container'>
          <Switch>
            <Route exact path='/'>
              <PokePage />
            </Route>
            <Route exact path='/Pokemeon'>
              <Pokemon />
            </Route>
          </Switch>
        </div>
      </Router>
      
    
    
    </div>
  );
}

export default App;
