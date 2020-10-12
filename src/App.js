import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
    </div>
  );
}

export default App;
