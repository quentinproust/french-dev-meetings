import React, { Component } from 'react';
import HomeTemplate from './HomeTemplate';
import geoposition from '../../geoposition';
import meetings from '../../meetings';

meetings.forEach((meeting, index) => {
  meeting.index = index;
  meeting.isPastMeeting = new Date(meeting.when) < new Date();
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [46.5810235, 0.3398887],
      pastConferencesFiltered: false,
      meetings,
    };

    geoposition().then((p) => {
      const position = [p.latitude, p.longitude];
      this.setState({ position });
    });
  }

  toggleFiltered() {
    let ms = meetings;
    if (!this.state.pastConferencesFiltered) {
      ms = meetings.filter(m => !m.isPastMeeting);
      console.log('Filtering past meetings : ' + ms.length + '/' + meetings.length);
    }

    this.setState({
      pastConferencesFiltered: !this.state.pastConferencesFiltered,
      meetings: ms,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <HomeTemplate
        {...this.state}
        onToggleFiltered={() => this.toggleFiltered()}
      />
    );
  }
}
