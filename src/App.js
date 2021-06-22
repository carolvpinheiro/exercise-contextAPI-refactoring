import React from 'react';
// import TrafficSignal from './TrafficSignal';
// import Cars from './Cars';
import './App.css';
import GoCars from './GoCars';
import CarProvider from './context/CarProvider';
import SignalProvider from './context/SignalProvider';
import Signal from './Signal';

function App() {
  return (
    <CarProvider>
      <div className="container">
        <GoCars />
        <SignalProvider>
          <Signal />
        </SignalProvider>
      </div>
    </CarProvider>
  );
}

export default App;
