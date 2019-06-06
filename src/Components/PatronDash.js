import React from 'react'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStyles2';

  class PatronDash extends React.Component {
    render() {
    return (
            
    <AppContainer>
      <div>
              <h1>Toy Information</h1>
              
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

export default PatronDash