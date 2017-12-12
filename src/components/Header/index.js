import React, { Component } from 'react';
import Logo from './logoPaymesys.png';
import { HeadNav, MenuItem, ImageIcon, ButtonRight } from './styled';


class Header extends Component {
  static propTypes = {
  }

  constructor() {
    super();
    this.state = {};
  }

  ScrollWindows = Y => {
    window.scrollTo(0, Y);
  }

  render() {
    return (
      <HeadNav>
        <ImageIcon src={Logo} />
        <MenuItem onClick={() => this.ScrollWindows(50)}>
          Home
        </MenuItem>
        <MenuItem onClick={() => this.ScrollWindows(600)}>
          Service
        </MenuItem>
        <MenuItem onClick={() => this.ScrollWindows(1100)}>
          Partner
        </MenuItem>
        <MenuItem >
          Contact
        </MenuItem>
        <ButtonRight style={{ backgroundColor: '#FEC448' }} >
          Sign In
        </ButtonRight>
        <ButtonRight>
          Sign Up
        </ButtonRight>
      </HeadNav>
    );
  }
}


export default Header;
