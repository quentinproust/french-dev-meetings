import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

export default function MeetingPopup({ meeting, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="meeting-map-popup">
        <h1 className="title">{meeting.title}</h1>
        <p className="date">{meeting.text_date}</p>
        <p className="location">{meeting.text_location}</p>
        <p className="description">{meeting.description}</p>
        <a href={meeting.url} target="blank">Voir sur le site</a>
      </div>
    </Modal>
  );
}

MeetingPopup.propTypes = {
  meeting: PropTypes.shape({
    when: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number),
    text_date: PropTypes.string.isRequired,
    text_location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
