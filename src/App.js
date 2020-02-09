import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="wrapper">
        <div className="search_box">
          <input type="text" placeholder="Search for a spell!" />
          <i className="fa fa-search" />
        </div>
      </div>
    </div>
  );
}

export default App;
