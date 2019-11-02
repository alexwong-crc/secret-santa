import React from 'react'
import {Container} from './library'

const InputField = props => {
  return (
    <Container>
      <div>{props.detail}:</div>
      <input />
    </Container>
  )
}
export {InputField}
