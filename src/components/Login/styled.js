import styled from 'styled-components';
import { Image } from 'semantic-ui-react'

export const LoginBlock = styled.div`
  padding: 3%;
  height: 1000px;
  background: white;
`;

export const FormBox = styled.div`
  padding-top: 1rem;
  height: 400px;
  width: 450px;
  display: block;
  margin: auto;
`;

export const ButtonBox = styled.div`
  padding-top: 1rem;
  width: 150px;
  display: block;
  margin: auto;
`;

export const Logo = styled(Image)`
  &&&{
    display: block;
    margin: auto;
  }
`;
