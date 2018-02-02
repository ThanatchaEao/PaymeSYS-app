import React, { Component } from 'react';
import AttendeeSideBar from '../Sidebar/index'

class AttendeeHome extends Component {
  static propTypes = {
  }

  constructor() {
    super();
    this.state = {
      status: 0, // Status of next button
    };
  }

  render() {
    return (
      <AttendeeSideBar step={0} />
    )
  }
}

export default AttendeeHome;
