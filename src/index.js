import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from "./Footer"
ReactDOM.render(
    <div id="container">
    <Header />
    <App />
    <Footer />
    </div>
    ,
  document.getElementById('root')
);
