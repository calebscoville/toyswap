import React from 'react'
import styled from 'styled-components'

export const PostToy = () => {
    return (
        <div>
            <h1>Post a Toy</h1>
            <Button>Post it Like You Mean it</Button>
        </div>
    )
}

export default PostToy

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: 2px solid palevioletred;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
`