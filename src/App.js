import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js/Navbar';
import ProductList from './components/ProductList/ProductList';
import WineDetails from './components/WineDetails/WineDetails';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';
import './App.css'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={WineDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  } 
}

export default App

