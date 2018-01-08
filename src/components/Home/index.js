import React, { Component } from 'react';
import HomeTemplate from './HomeTemplate';
import geoposition from '../../geoposition';
import meetings from '../../meetings';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [46.5810235, 0.3398887],
    };

    geoposition().then((p) => {
      const position = [p.latitude, p.longitude];
      this.setState({ position });
    });
  }

  render() {
    return <HomeTemplate position={this.state.position} meetings={meetings} />;
  }
}
