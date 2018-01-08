import React from 'react';
import PropTypes from 'prop-types';
import MeetingMap from '../MeetingMap';

import logo from './logo.png';
import './Home.css';

export default function HomeTemplate({ position, meetings }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">French Dev Meetings</h1>
        <h2 className="App-desc">Trouver où se rencontre les développeurs près de vous !</h2>
      </header>
      <div className="App-meetings-map">
        <MeetingMap
          meetings={meetings}
          position={position}
        />
      </div>
    </div>
  );
}

HomeTemplate.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  meetings: PropTypes.arrayOf(PropTypes.shape({
    when: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number),
    text_date: PropTypes.string.isRequired,
    text_location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};
