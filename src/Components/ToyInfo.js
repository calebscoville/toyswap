import React from 'react'
import styled from 'styled-components'

export const ToyInfo = () => {
    return (
        <div>
            <h1>Toy Information</h1>
            <Button>Check Out This Toy</Button>
        </div>
    )
}

export default ToyInfo

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`