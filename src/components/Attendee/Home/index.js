import React, { Component } from 'react';
import { Dropdown, Divider, Table } from 'semantic-ui-react';
import { ContainBox, InfoBox, InfoContainer } from './styled';

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
          <h3>Conference: </h3>
          <Dropdown placeholder="Conference ID" fluid selection options={'stateOptions'} />
          <h3>Paper ID: </h3>
          <Dropdown placeholder="Paper ID" fluid selection options={'stateOptions'} />
          <h3>Status: </h3>
          <h3>Role(s): </h3>
        </InfoBox>
        <InfoContainer>
          <h3>Early Bird Deadline: </h3>
          <h3>Payment Deadline: </h3>
          <h3>Conference Information: </h3>
        </InfoContainer>
        <br />
        <Divider horizontal>More</Divider>
        <InfoContainer>
          <h2>Active Conference(s)</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Conferences</Table.HeaderCell>
                <Table.HeaderCell>PID</Table.HeaderCell>
                <Table.HeaderCell>Recept</Table.HeaderCell>
                <Table.HeaderCell>Info</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>ICSEC 2017</Table.Cell>
                <Table.Cell>CE6033</Table.Cell>
                <Table.Cell selectable>Download</Table.Cell>
                <Table.Cell selectable>Link</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>ICAN 2018</Table.Cell>
                <Table.Cell>IP120</Table.Cell>
                <Table.Cell selectable>Download</Table.Cell>
                <Table.Cell selectable>Link</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </InfoContainer>
      </ContainBox>
    )
  }
}

export default AttendeeHome;
