import React from 'react'
import styled from 'styled-components'

export const PatronDash = () => {
    return (
      <div>
          <h1>Patron Dashboard</h1>
          <Button>Submit</Button>
      </div>  
    )
}

export default PatronDash

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`