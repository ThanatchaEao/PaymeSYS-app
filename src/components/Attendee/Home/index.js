import React, { Component } from 'react';
import { ContainBox, InfoBox } from './styled';

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
      <ContainBox>
        <InfoBox>
          Hello
        </InfoBox>
      </ContainBox>
    )
  }
}

export default AttendeeHome;
