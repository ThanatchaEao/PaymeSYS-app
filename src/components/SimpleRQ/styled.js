import styled from 'react-sc'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export const ModalHeader = styled.p`
  font-size: 16px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #000000;
`

export const ModalContent = styled.p`
font-size: 14px;
font-weight: 500;
letter-spacing: 0.3px;
text-align: left;
color: #000000;
`

export const EditButton = styled.button`
  &&&{
    width: 40%;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
  }
`

export const PostButton = styled.button`
  &&&{
    width: 40%;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #3a7bd5;
    border-style: solid;
    color: #ffffff;
    margin-left: 2%;
  }
`

export const PostMainButton = styled.button`
  &&&{
    width: 174px;
    height: 40px;
    border-radius: 20px;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
    margin-left: 82%;
  }
`

export const UploadButton = styled.button`
    width: 163px;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-color: #3a7bd5;
    border-style: solid;
    color: #ffffff;
`
export const InputBox = styled.input`
	border-radius: 3px;
	border: solid 1px #dddddd;
  padding: 2%;
  width: 100%;
	height: auto;
  &::-webkit-input-placeholder {
        color: #323028;
        opacity: 0.35;
    }
`
