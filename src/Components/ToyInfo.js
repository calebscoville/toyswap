import React from 'react'
// import styled from 'styled-components'
import 'reset-css'
// import AppStyles from './AppStyles'

import {
    AppContainer,
    FormContainer,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStyles';

class ToyInfo extends React.Component {
    render() {
    return (
        
    <AppContainer>
  <div>
            <h1>Toy Information</h1>
            {/* <Button>Check Out This Toy</Button> */}
        </div>
    <FormContainer>
      <FormHeader>
        <FormTitle>Toy Information</FormTitle>
      </FormHeader>
      <FormInput email="email" />
      <FormInput />
      <FormBtn>Check this toy out!</FormBtn>
      <FormBtn register>Link to toy online for addtl. info</FormBtn>
    </FormContainer>
    </AppContainer>

    )
}
}

export default ToyInfo

// const Button = styled.button`
// background: palevioletred;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: black;
// margin: 0 1em;
// padding: 0.25em 1em;
// `