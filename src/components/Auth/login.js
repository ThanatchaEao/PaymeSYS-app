import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
} from 'semantic-ui-react'
import gift from '../image/gigift.jpg'
import logo from '../image/logo.png'
import '../../styles/login-style.scss'
import { authenticate } from '../../api/auth'
import styled from 'react-sc'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  }

  signUpHandler() {
    window.location.href = '/signup'
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    console.log(this.props.data.error)
    return (
      <div className="loginStyle">
        <div className="row">
          <div className="large-10 large-offset-4 columns">
            <div className="logostyle">
              <img src={logo} />
            </div>
          </div>
        </div>
        <Container>
          <div className="large-10 large-centered columns">
            <div className="inbox-login">
              <div className="row">
                <div className="large-5 columns">
                  <img src={gift} className="gift" />
                </div>
                <div className="large-5 columns">
                  <h2 style={{ marginTop: '23%' }}>เข้าสู่ระบบ</h2>
                  <p>เข้าด้วย E-mail ของคุณหรือ Username</p>
                  <hr className="line0" />
                  <Form
                    style={{ paddingLeft: '0px' }}
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Field>
                      <div className="divInput">
                        <img
                          className="iconUser"
                          src="../../../login/icons8-user.png"
                        />
                        <Form.Input
                          placeholder="อีเมลของคุณ"
                          name="email"
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    <Form.Field>
                      <div className="divInput">
                        <img
                          className="iconPassword"
                          src="../../../login/icons8-password.png"
                        />
                        <Form.Input
                          placeholder="พาสเวิร์ด"
                          name="password"
                          type="password"
                          onChange={this.handleChange}
                        />
                      </div>
                    </Form.Field>
                    {this.props.data.error
                      ? <p style={{ color: 'red' }}>
                          {' '}{this.props.data.message}
                        </p>
                      : <p />}
                    <a className="link">ลืมพาสเวิร์ด?</a>
                    <button className="logInButton">
                      ลงชื่อเข้าใช้
                    </button>
                  </Form>
                  <hr className="line2" />
                  <p className="question">ยังไม่เคยสมัคร?</p>
                  <button
                    className="newMemberButton"
                    onClick={() => this.signUpHandler()}
                  >
                    สร้างบัญชีใหม่
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
})
const mapStateToProps = state => ({
  data: state.authReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
