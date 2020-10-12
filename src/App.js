import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';

const HatsPage =() => (
  <div>
    <h1>Hats Page Bitch!</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
