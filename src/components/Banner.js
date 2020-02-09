import React, { Component } from 'react';
import '../App.scss';

class Banner extends Component {
  render() {
    return (
      <div id="banner" className="banner">
        <div id="icon" className="icon">
          <img src="spell-icon.png" alt="DnD Icon" />
        </div>
        <div id="title" className="title">
          <h2>Spell Search</h2>
        </div>
      </div>
    );
  }
}

export default Banner;
