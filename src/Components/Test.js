import React from 'react'
import styled from 'styled-components';

export const Test = () => {
    return (
    <div>
        <h1>Test</h1>
        <Button>Submit</Button>
    </div>
    )
};

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export default Test