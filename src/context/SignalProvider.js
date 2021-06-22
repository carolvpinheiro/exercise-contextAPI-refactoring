import React, { Component } from 'react';
import CarContext from './CarContext';
// import redSignal from './images/redSignal.jpeg';
// import yellowSignal from './images/yellowSignal.jpeg';
// import greenSignal from './images/greenSignal.jpeg';

class SignalProvider extends Component {
  constructor() {
    super();

    this.state = {
      colorSignal: 'red',
    }
    this.getClorSignal = this.getClorSignal.bind(this);
    // this.renderSignal = this.renderSignal.bind(this);
  }

  getClorSignal(value) {
    if (value === 'red') this.setState({ colorSignal: 'red' });
    if (value === 'yellow') this.setState({ colorSignal: 'yellow' });
    if (value === 'green') this.setState({ colorSignal: 'green' });
  }

  // renderSignal(signalColor) {
  //   if (signalColor === 'red') return redSignal;
  //   if (signalColor === 'yellow') return yellowSignal;
  //   if (signalColor === 'green') return greenSignal;
  //   return null;
  // };

  render() {
    const { children } = this.props;
    return (
      <CarContext.Provider value={ 
        {...this.state, getClor: this.getClorSignal}
      }>
        { children }
      </CarContext.Provider>
    );
  }
}

export default SignalProvider;
