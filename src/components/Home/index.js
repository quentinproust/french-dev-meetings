import React, { Component } from 'react';
import HomeTemplate from './HomeTemplate';
import meetings from '../../meetings';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [46.5810235, 0.3398887],
    };
  }

  render() {
    return <HomeTemplate position={this.state.position} meetings={meetings} />;
  }
}
