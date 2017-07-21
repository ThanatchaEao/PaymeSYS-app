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
import '../../../styles/submit-plan.scss'

class Coplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.ipdCoPlayQuota !== null
        ? 'Quota Share'
        : this.props.ipdCoPlayDeductable !== null
            ? 'Deductable'
            : this.props.ipdCoPlayMixPercentage !== null &&
                this.props.ipdCoPlayMixNotExceed !== null &&
                this.props.ipdCoPlayMixYear !== null
                ? 'Quota Share + Deductable'
                : '',
    }
  }

  static propTypes = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('ipdCoPlayQuota')
    this.props.handleChangeToNull('ipdCoPlayDeductable')
    this.props.handleChangeToNull('ipdCoPlayMixPercentage')
    this.props.handleChangeToNull('ipdCoPlayMixNotExceed')
    this.props.handleChangeToNull('ipdCoPlayMixYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({
        value: newProps.ipdCoPlayQuota !== null
          ? 'Quota Share'
          : newProps.ipdCoPlayDeductable !== null
              ? 'Deductable'
              : newProps.ipdCoPlayMixPercentage !== null &&
                  newProps.ipdCoPlayMixNotExceed !== null &&
                  newProps.ipdCoPlayMixYear !== null
                  ? 'Quota Share + Deductable'
                  : '',
      })
    }
  }

  render() {
    const {
      ipdCoPlayDeductable,
      ipdCoPlayMixNotExceed,
      ipdCoPlayMixPercentage,
      ipdCoPlayMixYear,
      ipdCoPlayQuota,
    } = this.props
    return (
      <div>
        <div className="coplayParagraph">
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share"
                name="CoPlayGroup"
                value="Quota Share"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Quota Share'
              ? <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
                  value={ipdCoPlayQuota}
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
                  value=""
                  readOnly
                  onChange={this.props.handleChange}
                />}
            <p className="selectText"> %</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Deductable"
                name="CoPlayGroup"
                value="Deductable"
                checked={this.state.value === 'Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Deductable'
              ? <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayDeductable"
                  id="ipdCoPlayDeductable"
                  value={ipdCoPlayDeductable}
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayDeductable"
                  id="ipdCoPlayDeductable"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />}
            <p className="selectText"> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share + Deductable"
                name="CoPlayGroup"
                value="Quota Share + Deductable"
                checked={this.state.value === 'Quota Share + Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Quota Share + Deductable'
              ? <div style={{ display: 'inherit' }}>
                  <Form.Input
                    type="number"
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="ipdCoPlayMixPercentage"
                    id="ipdCoPlayMixPercentage"
                    value={ipdCoPlayMixPercentage}
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="ipdCoPlayMixNotExceed"
                    id="ipdCoPlayMixNotExceed"
                    value={ipdCoPlayMixNotExceed}
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPlayMixYear"
                    id="ipdCoPlayMixYear"
                    value={ipdCoPlayMixYear}
                    onChange={this.props.handleChange}
                    required
                  />
                </div>
              : <div style={{ display: 'inherit' }}>
                  <Form.Input
                    type="number"
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="ipdCoPlayMixPercentage"
                    id="ipdCoPlayMixPercentage"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="ipdCoPlayMixNotExceed"
                    id="ipdCoPlayMixNotExceed"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPlayMixYear"
                    id="ipdCoPlayMixYear"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                </div>}
          </Form.Group>
        </div>
      </div>
    )
  }
}

Coplay.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Coplay)
