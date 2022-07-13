// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #24263c;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #475569;
  box-shadow: 1px 4px 6px 9px #434451;
  border-radius: 8px;
  height: 245px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 35px;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  padding-top: 0px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
  margin-top: 7px;
`

export const Input = styled.input`
  height: 25px;
  background-color: #edeeff;
  width: 100%;
  border: none;
  outline: none;
`

export default Container
