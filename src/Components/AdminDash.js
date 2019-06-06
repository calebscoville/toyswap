import React from 'react'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn
  } from './AppStyles3';

  class AdminDash extends React.Component {
    render() {
    return (
            
    <AppContainer>
      <div>
              <h1>Toy Information</h1>
              
          </div>
      <FormContainer>
          <Image> Your Hot Pic Here :) </Image>
        <FormHeader>
          <FormTitle>Toy Information</FormTitle>
        </FormHeader>
        <FormInput email="email" />
        <FormInput />
        <FormBtn>Check this toy out!</FormBtn>
        <FormBtn register>Link to toy online for addtl. info</FormBtn>
      </FormContainer>

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

export default AdminDash