import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spells from './components/Spells';
import SpellHeader from './components/SpellHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSpell('');
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.getSpell(searchTerm);
  }

  getSpell = async searchTerm => {
    var spellsRow = [];
    const response = await fetch(
      `https://api.open5e.com/spells/?search=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    data.results.map(spell => {
      const spellRow = <Spells key={spell.index} spell={spell} />;
      spellsRow.push(spellRow);
    });
    this.setState({ rows: spellsRow });
  };

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
        <SpellHeader />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
