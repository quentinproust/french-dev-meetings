import React from 'react';
import PropTypes from 'prop-types';
import { icon } from 'leaflet';
import { Marker } from 'react-leaflet';
import MeetingPopup from './MeetingPopup';

const pastMeetingIcon = icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MeetingMarker({
  meeting,
}) {
  const isPastMeeting = new Date(meeting.when) < new Date();
  return (
    <Marker position={meeting.location} {...isPastMeeting ? { icon: pastMeetingIcon } : {}}>
      <MeetingPopup meeting={meeting} opacity={100} />
    </Marker>
  );
}

MeetingMarker.propTypes = {
  meeting: PropTypes.shape({
    when: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number),
    text_date: PropTypes.string.isRequired,
    text_location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
