// Write your code here

import {useState} from 'react'

import {
  Container,
  PasswordContainer,
  Heading,
  Para,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const changeState = event => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input value={password} type="password" onChange={changeState} />
        <>
          {password.length < 8 ? (
            <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
          ) : null}
        </>
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
