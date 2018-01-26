import React, { Component } from 'react';
import { Form, Divider, Button, Icon } from 'semantic-ui-react'
import { LoginBlock, Logo, FormBox, ButtonBox } from './styled';
import logoPic from '../../../assets/Login/logo.png';

class Login extends Component {
  static propTypes = {
  }

  constructor() {
    super();
    this.state = {
      status: 0, // Status of next button
    };
  }

  handleSetStatus = () => {
    this.setState({ status: 1 })
  }

  RenderPage = () => {
    if (this.state.status === 0) {
      return (
        <div>
          <LoginBlock>
            <Logo src={logoPic} />
            <FormBox>
              <Form>
                <Form.Field>
                  <h3>Conference Email Address</h3>
                  <input placeholder="example@example.com" />
                </Form.Field>
              </Form>
              <Divider horizontal />

              <h3>Capcha</h3>
              <ButtonBox>
                <Button animated color="orange" onClick={this.handleSetStatus} style={{ width: '150px' }}>
                  <Button.Content visible>Next</Button.Content>
                  <Button.Content hidden>
                    <Icon name="right arrow" />
                  </Button.Content>
                </Button>
              </ButtonBox>
            </FormBox>
          </LoginBlock>
        </div>
      );
    }
    return (
      <div>
        OTP PAGE
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.RenderPage()}
      </div>
    );
  }
}


export default Login;
