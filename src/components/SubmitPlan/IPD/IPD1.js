import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import CoPlay from './CoPlay'

class IPD1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCoPlay: false,
      value: '',
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
    }
    const value = ''
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleToggle = () => {
    if (this.state.showCoPlay) {
      this.setState({ showCoPlay: false })
    } else {
      this.setState({ showCoPlay: true })
    }
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'secondChoice') {
      document.getElementById('ipdLumsumPerTime').value = ''
      this.props.handleChangeToNUll('ipdLumsumPerTime')
      document.getElementById('ipdLumsumTimeNotExceedPerYear').value = ''
      this.props.handleChangeToNUll('ipdLumsumTimeNotExceedPerYear')
    } else {
      document.getElementById('ipdLumsumPerYear').value = ''
      this.props.handleChangeToNUll('ipdLumsumPerYear')
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    this.props.handleVerifyState()
  }

  render() {
    return (
      <div>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="จำนวนเงิน"
              name="IPD1Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          {this.state.value === 'firstChoice'
            ? <Form.Input
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerYear"
                id="ipdLumsumPerYear"
                onChange={this.props.handleChange}
                required
              />
            : <Form.Input
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerYear"
                id="ipdLumsumPerYear"
                onChange={this.props.handleChange}
                readOnly
              />}
          <p> บาท/ปี</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="จำนวนเงิน"
              name="IPD1Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          {this.state.value === 'secondChoice'
            ? <div style={{ display: 'inherit' }}>
                <Form.Input
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumPerTime"
                  id="ipdLumsumPerTime"
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  label="บาท/ครั้ง  ครั้งละไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumTimeNotExceedPerYear"
                  id="ipdLumsumTimeNotExceedPerYear"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            : <div style={{ display: 'inherit' }}>
                <Form.Input
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumPerTime"
                  id="ipdLumsumPerTime"
                  onChange={this.props.handleChange}
                  readOnly
                />
                <Form.Input
                  label="บาท/ครั้ง  ครั้งละไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumTimeNotExceedPerYear"
                  id="ipdLumsumTimeNotExceedPerYear"
                  onChange={this.props.handleChange}
                  readOnly
                />
              </div>}
          <p> บาท/ปี</p>
        </Form.Group>
      </div>
    )
  }
}

IPD1.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD1)