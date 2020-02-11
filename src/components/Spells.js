import React, { Component } from 'react';
import '../App.scss';

class Spells extends Component {
  render() {
    return (
      <div className="spellDiv">
        <h3>{this.props.spell.name}</h3>
        <h4>{this.props.spell.desc}</h4>
        <p>{this.props.spell.school}</p>
        <p>{this.props.spell.range}</p>
        <p>{this.props.spell.level}</p>
        <p>{this.props.spell.higher_level}</p>
        <p>{this.props.spell.page}</p>
        <p>{this.props.spell.dnd_class}</p>
      </div>
    );
  }
}

export default Spells;
