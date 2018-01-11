import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import Control from 'react-leaflet-control';
import MeetingMarker from './MeetingMarker';

import eye from './eye.png';
import invisible from './invisible.png';

export default function MeetingMap({
  style,
  position,
  zoom,
  meetings,
  pastConferencesFiltered,
  onToggleFiltered,
}) {
  return (
    <Map center={position} zoom={zoom} style={style}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {meetings.map(m => (
        <MeetingMarker key={m.index} meeting={m} />
      ))}
      <Control position="topleft">
        <div className="leaflet-bar">
          <a href="#"
            title="Filtrer les anciens meetings"
            role="button"
            aria-label="Zoom in"
            onClick={e => { e.preventDefault(); onToggleFiltered(); }}
          >
            {pastConferencesFiltered
              ? <img src={invisible} style={{ width: '20px', marginTop: '4px' }} alt="" />
              : <img src={eye} style={{ width: '20px', marginTop: '4px' }} alt="" />
            }
          </a>
        </div>
      </Control>
    </Map>
  );
}

MeetingMap.propTypes = {
  pastConferencesFiltered: PropTypes.bool.isRequired,
  onToggleFiltered: PropTypes.func.isRequired,
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
