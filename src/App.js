import React from 'react';
import logo from './logo.png';
import './App.css';
import MeetingMap from './components/MeetingMap';

import meetings from './meetings';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">French Dev Meetings</h1>
        <h2 className="App-desc">Trouver où se retrouve les développeurs près de vous !</h2>
      </header>
      <div className="App-meetings-map">
        <MeetingMap
          meetings={meetings}
          position={[46.5810235, 0.3398887]}
        />
      </div>
    </div>
  );
}
