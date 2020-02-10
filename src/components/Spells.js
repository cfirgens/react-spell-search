import React, { Component } from 'react';

class Spells extends Component {
  render() {
    return <h3>{this.props.spell.name}</h3>;
  }
}

export default Spells;
