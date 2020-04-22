import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from "./Footer"
ReactDOM.render(
    <div className="wrapper">
    <div className="content">
    <Header />
    <App />
    </div>
    <Footer />
    </div>
    ,
  document.getElementById('root')
);
