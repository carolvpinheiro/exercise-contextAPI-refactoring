import React, { Component } from 'react';
import CarContext from './context/CarContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

class Signal extends Component {
  constructor() {
    super();
    this.renderSignal = this.renderSignal.bind(this);
  }

  renderSignal(signalColor) {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    const { colorSignal, getColor } = this.context;
    console.log(colorSignal);
    return (
      <div>
      <div className="button-container">
        <button onClick={() => getColor('red')} type="button">
          Red
        </button>
        <button onClick={() => getColor('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => getColor('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={this.renderSignal(colorSignal)} alt="" />
    </div>
    );
  }
}

Signal.contextType = CarContext;

export default Signal;