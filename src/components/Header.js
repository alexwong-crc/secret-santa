import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background-color: green;
  color: white;
  width: 100%;
  height: 50px;
`

export default () => {
  return (
    <div>
      <Bar>Secret Santa</Bar>
    </div>
  )
}
