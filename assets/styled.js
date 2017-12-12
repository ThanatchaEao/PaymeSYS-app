import styled from 'styled-components';
import { Image, Button } from 'semantic-ui-react';

export const HeadNav = styled.div`
  border: none;
  background-color: #ffffff;
  height: 71px;
  width: 100%;
  z-index: 20;
      border-bottom: 1px solid #E8E9F3;
`;
export const LogoPosition = styled.div`
  position: absolute;
  left: 29px;
  top: 13px;
`;

export const MenuItem = styled.div`
  font-family: "helvetica";
  display: inline-block;
  margin: 0px;
  width: 102px;
  padding: 24px 0px;
  text-align: center;
  height: 100%;
  font-size: 129%;
  background-color: #ffffff;
  color:#5B6578;
  &:hover {
    background-color: #5B6578;
    color: rgb(255, 255, 255);
  }
`;

export const ButtonRight = styled(Button)`
  &&&{
    width: 100px;
    height: 42px;
    color: rgb(255, 255, 255);
    background-color: #5B6578;
    padding: 0px 10px;
    float: right;
    margin: 15px 15px 0px 0px;
    display: inline-block;
  }
`;

export const ImageIcon = styled(Image)`
  &&&{
    width: 171px;
    height: auto;
    margin: 0px 17px;
    display: inline-block;
  }
`;
