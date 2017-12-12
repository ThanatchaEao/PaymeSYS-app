import React, { Component } from 'react';
import PropTypes from 'prop-types';
import conpic from '../../../assets/Home/conpic.png';
import makepayment from '../../../assets/Home/makepayment.png';
import tracking from '../../../assets/Home/tracking.png';
import confermanage from '../../../assets/Home/confermanage.png';
import partner from '../../../assets/Home/partner.png';
import footer1 from '../../../assets/Home/footer1.png';
import footer2 from '../../../assets/Home/footer2.png';
import {
  StageBlock,
  ImageCon,
  TextBlock,
  ButtonLeft,
  ImageIcon,
  TextDes,
  SearchInput,
  ImageFooter,
} from './styled';


class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <StageBlock>
          <TextBlock>
            <h1>Conference Payment <br /> platform</h1><br />
            Solution for conferences payment problems. Relax,
            bring problems to our system for manage.<br />
            we accept all of conference form every countries.
            <br />
            <br />
            <ButtonLeft>
              join us Now!!
            </ButtonLeft>
          </TextBlock>
          <ImageCon src={conpic} />
        </StageBlock>
        <StageBlock
          className="row"
          style={{ padding: '25px' }}
        >
          <h1 style={{ color: '#4C4D60' }} > Service </h1>
          <div className="large-4 columns">
            <ImageIcon src={makepayment} />
            <TextDes>
              <h1>
                Make Payment
              </h1>
              <br />
              You can make payment to registed for <br />
              conferences at one place. We have <br />
               many payment channel to support you.<br /> <br />
            </TextDes>
          </div>
          <div className="large-4 columns">
            <ImageIcon src={tracking} />
            <TextDes>
              <h1>Tracking Your Status </h1> <br />
              If you joined many conference and <br />
             want to know the status, we can help <br />
              you for tracking from our system. <br />
            </TextDes>
          </div>
          <div className="large-4 columns">
            <ImageIcon src={confermanage} />
            <TextDes>
              <h1>All of Conferences Manager</h1><br />
              Worried about conferences<br />
              managerment in case you have many<br />
              conderences to manage at the same<br />
              time. We can help you.<br />
            </TextDes>
          </div>
        </StageBlock>
        <StageBlock
          className="row"
          style={{ padding: '25px', height: '527px' }}
        >
          <h1 style={{ color: '#4C4D60', display: 'inline-block' }} >
             Partner Conferences
          </h1>
          <SearchInput icon="search" placeholder="Search..." />
          <ImageCon src={partner} style={{ margin: 'auto', float: 'center' }} />
        </StageBlock>
        <StageBlock
          style={{
            backgroundColor: '#5B6578',
            padding: '25px',
            height: '259px',
          }}
        >
          <ImageFooter src={footer1} />
          <ImageFooter src={footer2} />
        </StageBlock>
      </div>
    );
  }
}


export default Home;
