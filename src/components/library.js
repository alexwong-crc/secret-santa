import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  > * + * {
    margin-left: 15px;
  }

  /* > * {
    margin-left: 15px;
  }
  > *:first-child {
    margin-left: 0px;
  } 
  
  The code in the comment does the same thing as the "labotomised owl" - google this/call alex.

  */
`
