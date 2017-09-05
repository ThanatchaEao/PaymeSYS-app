import React, { Component } from 'react';
import { Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled(Link)`
  color: #6c6c6c;
`;
export default class Sidebar extends Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <Icon name="home" size="large" />&nbsp;
            <Links to="/dashboard" ><Item.Content verticalAlign="middle">Dashboard</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="book" size="large" />&nbsp;
            <Links to="/viewplanflex" ><Item.Content verticalAlign="middle">ลูกค้าของคุณ</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="group" size="large" />&nbsp;
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">การเสนอราคา</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="group" size="large" />&nbsp;
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">รายการเคลม</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="newspaper" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">แผนประกันภัย</Item.Content>
          </Item>
          <Item>
            <Icon name="user" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content>
          </Item>
          <Item>
            <Icon name="setting" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">ตั้งค่า</Item.Content>
          </Item>
        </Item.Group>
      </aside>
    );
  }
}