import React from 'react'
import 'reset-css'

import {
    AppContainer,
    FormContainer,
    FormHeader,
    FormTitle,
    FormInput,
    FormInput2,
    FormInput3,
    FormBtn
  } from './AppStyles2';

  class PostToy extends React.Component {
    render() {
    return (
            
    <AppContainer>
      <div>
              <h1>Toy Information</h1>
              
          </div>
      <FormContainer>
        <FormHeader>
          <FormTitle>Add Toy Pictures Here</FormTitle>
        </FormHeader>
       
        <FormBtn> + Click Here to Upload Pictures + </FormBtn>
        <FormBtn register>Click Here to Add Link</FormBtn>
      </FormContainer>

      <div>
              <h1>Toy Information</h1>
              
          </div>
      <FormContainer>
        <FormHeader>
          <FormTitle>Enter Toy Information</FormTitle>
        </FormHeader>
        <FormInput title="title" />
        <FormInput />
        <FormInput2 con="condition" />
        <FormInput2 />
        <FormInput3 add="Addtl. Info" />
        <FormInput3 />
        <FormBtn>Post This Toy for the Public!</FormBtn>
      </FormContainer>
  
      </AppContainer>
  
      
  
      )
  }
  }

export default PostToy