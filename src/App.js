import React from 'react';
// import TrafficSignal from './TrafficSignal';
import './App.css';
// import Cars from './Cars';
import './App.css';
import GoCars from './GoCars';
import CarProvider from './context/CarProvider';

function App() {
  return (
    <CarProvider>
      <div className="container">
      <GoCars />
      {/* <TrafficSignal /> */}
    </div>
    </CarProvider>
  );
}

export default App;
