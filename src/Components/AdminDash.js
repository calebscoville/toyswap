import React from 'react'
import styled from 'styled-components'

export const AdminDash = () => {
    return (
        <div>
            <h1>Administrator Dashboard</h1>
            <Button>Touch Me!</Button>
        </div>
    )
}

export default AdminDash

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`