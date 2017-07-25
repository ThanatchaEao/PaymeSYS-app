import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Responsive } from 'react-responsive'
import Message from '../../image/icons-8-message@2x.png'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'
const MediaQuery = require('react-responsive')

class ApproveClaimStatus extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="clam-status">
        <div className="clam-box">
          <div className="blue-clam-box-header">
            <div className="row">
              <div className="small-1 columns">
                <img src={Message} className="clam-image" />
              </div>
              <div
                className="small-11 columns"
                style={{ paddingLeft: '0px', paddingRight: '0px' }}
              >
                <span className="blue-header-text-status">อนุมัติ </span>
                <span className="blue-no-text-status">no. 1200455020987</span>
              </div>
            </div>
          </div>
          <div className="clam-box-detail">
            <p>ประเภทการเคลม : ประกันภัย</p>
            <p>เรื่องที่เคลม : IPD</p>
            <p>วันที่เคลม : 12/05/2017</p>
            <p>ผู้เคลม : สมศรี ช่างสงสัย</p>
            <span>จำนวนเงิน : 540 บาท </span>
            <span className="blue-get-more-detail-link">ดูเพิ่มเติม&gt; </span>
          </div>
        </div>
      </div>
    )
  }
}

ApproveClaimStatus.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ApproveClaimStatus)
