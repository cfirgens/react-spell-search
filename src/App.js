import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch('magic');
  }

  performSearch(searchTerm) {
    const urlString = `http://www.dnd5eapi.co/api/spells/?name=${searchTerm}`;
    $.ajax({
      url: urlString,
      success: searchResults => {
        const results = searchResults.results;
        console.log(results);
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data');
      }
    });
  }

  render() {
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
}

export default App;
