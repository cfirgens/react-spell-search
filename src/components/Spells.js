import React, { Component } from 'react';
import '../App.scss';

import 'font-awesome/css/font-awesome.min.css';

class Spells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      higherLevels: false
    };
    this.toggleAdditionalInfo = this.toggleAdditionalInfo.bind(this);
  }

  componentDidMount() {
    this.toggleHigherLevels();
  }

  toggleHigherLevels() {
    const { higherLevels } = this.state;
    if (this.props.spell.higher_level !== '') {
      this.setState({
        higherLevels: true
      });
    }
  }
  toggleAdditionalInfo() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }
  render() {
    const { opened } = this.state;
    const { higherLevels } = this.state;

    return (
      <div>
        <div className="spellDiv" onClick={this.toggleAdditionalInfo}>
          <img
            className="schoolImage"
            src={`${this.props.spell.school}.png`}
            alt="school image"
          />

          <div className="spellLevel">
            <p>{this.props.spell.level}</p>
          </div>

          <div className="nameDiv">
            <h5>{this.props.spell.name}</h5>
            <p>
              {this.props.spell.school}-{this.props.spell.components}
            </p>
          </div>

          <div className="castingTime">{this.props.spell.casting_time}</div>
          <div className="castingDuration">{this.props.spell.duration}</div>

          <div className="castingRange">{this.props.spell.range}</div>

          <div className="spellClasses">{this.props.spell.dnd_class}</div>
          <div className="moreInfo">
            {!opened && <i className="fa fa-plus fa-3x" />}
            {opened && <i className="fa fa-minus fa-3x" />}
          </div>
        </div>
        {opened && (
          <div>
            <div className="extendedInformation" id="extendedInformation">
              <div className="spellEssentials">
                <div className="essentialsLeft">
                  <div>
                    <b>Level</b>
                    <br />
                    {this.props.spell.level}
                  </div>
                  <div>
                    {' '}
                    <b>Range</b>
                    <br />
                    {this.props.spell.range}
                  </div>
                  <div>
                    {' '}
                    <b>Duration</b>
                    <br />
                    {this.props.spell.duration}
                  </div>
                </div>
                <div className="essentialsRight">
                  <div>
                    {' '}
                    <b>Components</b>
                    <br />
                    {this.props.spell.components}
                  </div>
                  <div>
                    {' '}
                    <b>Casting Time</b>
                    <br />
                    {this.props.spell.casting_time}
                  </div>
                  <div>
                    {' '}
                    <b>School</b>
                    <br />
                    {this.props.spell.school}
                  </div>
                </div>
              </div>
            </div>

            <div className="spellDesc">
              <div className="desc">
                <hr />
                <p>{this.props.spell.desc}</p>
                {higherLevels && (
                  <p>
                    <b>At Higher Levels.</b> {this.props.spell.higher_level}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Spells;
