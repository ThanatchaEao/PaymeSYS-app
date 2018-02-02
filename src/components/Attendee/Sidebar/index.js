import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SideBox, Elements, ElementsActive } from './styled'

class AttendeeSideBar extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      step: props.step,
    };
  }

  render() {
    return (
      <SideBox>
        {
          (this.state.step === 0) ?
            <ElementsActive> Summary </ElementsActive>
            : <Elements> Summary </Elements>
        }
        {
          (this.state.step === 1) ?
            <ElementsActive> Documents </ElementsActive>
            : <Elements> Documents </Elements>
        }
        {
          (this.state.step === 2) ?
            <ElementsActive> Payments </ElementsActive>
            : <Elements> Payments </Elements>
        }
        {
          (this.state.step === 3) ?
            <ElementsActive> History </ElementsActive>
            : <Elements> History </Elements>
        }
        {
          (this.state.step === 4) ?
            <ElementsActive> Setting </ElementsActive>
            : <Elements> Setting </Elements>
        }
      </SideBox>
    );
  }
}

export default AttendeeSideBar;
