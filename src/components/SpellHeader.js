import React, { Component } from 'react';

class SpellHeader extends Component {
  render() {
    return (
      <div className="spellColumn">
        <div className="icon"></div>
        <div className="level">
          <h5>Level</h5>
        </div>
        <div className="info">
          <h5>Name</h5>
        </div>
        <div className="spellTime">
          <h5>Casting Time</h5>
        </div>
        <div className="spellDuration">
          <h5>Duration</h5>
        </div>
        <div className="range">
          <h5>Range</h5>
        </div>
        <div className="classes">
          <h5>Classes</h5>
        </div>
        <div className="moreInfoIcon"></div>
      </div>
    );
  }
}

export default SpellHeader;
