import React, { Component } from 'react'
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
        <ProductList/>
        <WineDetails/>
        <Cart/>
        <Default/>
      <h1 className="text-white">HELLO FROM APP</h1>
      </React.Fragment>
    )
  }
}

export default App

