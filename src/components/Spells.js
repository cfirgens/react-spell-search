import React, { Component } from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Spells extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="spellDiv">
        <img
          className="schoolImage"
          src={`${this.props.spell.school}.png`}
          alt="school image"
        />

        <div className="spellLevel">
          <p>{this.props.spell.level_int}</p>
        </div>

        <div className="nameDiv">
          <h5>{this.props.spell.name}</h5>
          <p>
            {this.props.spell.school}-{this.props.spell.components}
          </p>
        </div>

        <div className="castingDiv">
          <div className="castingTime">{this.props.spell.casting_time}</div>
          <div className="castingDuration">{this.props.spell.duration}</div>
        </div>

        <div className="castingRange">{this.props.spell.range}</div>

        <div className="spellClasses">{this.props.spell.dnd_class}</div>
      </div>
    );
  }
}

export default Spells;
