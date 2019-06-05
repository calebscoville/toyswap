import React from 'react'
import styled from 'styled-components'

export const BrowseToys = () => {
    return (
        <div>
            <h1>Browse All Toys</h1>
            <Button>Don't Touch This</Button>
        </div>
    )
}

export default BrowseToys

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`