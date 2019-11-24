import React from 'react'
import {InputField} from './InputField'
import {Container} from './library'

export default () => {
  return (
    <Container>
      <InputField detail="Name" />
      <InputField detail="Email" />
    </Container>
  )
}
