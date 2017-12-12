import styled from 'styled-components';
import { Image, Button, Input } from 'semantic-ui-react';

export const StageBlock = styled.div`
  height: 510px;
  width: 100%;
  background-color: #ffffff;
      border-bottom: 1px solid #E8E9F3;
`;

export const TextBlock = styled.div`
  padding-top: 150px;
  padding-left: 46px;
  font-size: 20px;
  line-height: 113%;
  text-align: center;
  float: left;
  color: #49505F;
  width: 38%;
`;

export const TextDes = styled.div`
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
  line-height: 113%;
  color: #49505F;
  width: 100%;
`;
export const ButtonLeft = styled(Button)`
  &&&{
    width: 165px;
    height: 50px;
    color: rgb(255,255,255);
    background-color: #FEC448;
    padding:0px 10px;
    font-size: 18px;
    margin: 15px 15px 0px 0px;
    display: inline-block;
    line-height: 24px;
  }
`;

export const ImageCon = styled(Image)`
  &&&{
    float:right;
    margin:30px;
  }
`;

export const ImageFooter = styled(Image)`
  &&&{
     display: block;
     margin: auto;
  }
`;

export const ImageIcon = styled(Image)`
  &&&{
     width: 226px;
     height: 214px;
     display: block;
     margin: auto;
  }
`;

export const SearchInput = styled(Input)`
  &&&{
     float: right;
  }
`;
