import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spells from './components/Spells';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch();
  }

  performSearch(searchTerm) {
    const urlString = `http://www.dnd5eapi.co/api/spells/?name=${searchTerm}`;
    $.ajax({
      url: urlString,
      success: searchResults => {
        var spellsRow = [];
        const results = searchResults.results;
        console.log(results);
        results.forEach(spell => {
          const spellRow = <Spells key={spell.index} spell={spell} />;
          spellsRow.push(spellRow);
        });
        this.setState({ rows: spellsRow });
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data');
      }
    });
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <div className="wrapper">
          <div className="search_box">
            <input
              type="text"
              placeholder="Search for a spell!"
              onChange={this.searchChangeHandler.bind(this)}
            />
            <i className="fa fa-search" />
          </div>
        </div>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
