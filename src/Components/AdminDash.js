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
          <FormTitle>Caleb "BDC"</FormTitle>
        </FormHeader>
        <text>You are an admin</text>
        <text>Email: runcaleb@gmail.com</text>
        <text>City: Orem</text>
        <text>Toy posts to date: 3,453</text>
        <text>Admin ID: 96024</text>
        <FormBtn register>Edit Profile</FormBtn>
      </FormContainer>

      <div>
              <h1>Toy Information</h1>
              
          </div>
      <FormContainer>
        <FormHeader>
          <FormTitle>What would you like to do rn?</FormTitle>
        </FormHeader>
        <FormBtn>Post a Toy</FormBtn>
        <FormBtn register>See All Toys</FormBtn>
        <FormBtn>Messages</FormBtn>
        <FormBtn register>Payments & Donations</FormBtn>

      </FormContainer>
  
      </AppContainer>
  
      
  
      )
  }
  }

export default AdminDash