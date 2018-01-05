import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MeetingPopup from './MeetingPopup';

export default function MeetingMap({
  style,
  position,
  zoom,
  meetings,
}) {
  return (
    <Map center={position} zoom={zoom} style={style}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {meetings.map((m, index) => (
        <Marker position={m.location} key={index}>
          <MeetingPopup meeting={m} />
        </Marker>
      ))}
    </Map>
  );
}

MeetingMap.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  }),
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number,
  meetings: PropTypes.arrayOf(PropTypes.shape({
    when: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number),
    text_date: PropTypes.string.isRequired,
    text_location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

MeetingMap.defaultProps = {
  style: {},
  zoom: 7,
  meetings: [],
};
