import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductProvider } from './Context/Context'
import './index.css';
import 'font-awesome/css/font-awesome.min.css'




ReactDOM.render(
  <ProductProvider>
    <Router>
     <App />
    </Router>,
  </ProductProvider>,
  document.getElementById('root')
);


