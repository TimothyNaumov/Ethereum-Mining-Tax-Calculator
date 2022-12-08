import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar';
import ContactFormController from './ContactFormController.js';


const Contact = () => {
  function submitForm(e){
    e.preventDefault();
    let name = document.getElementById('formFullName').value
    let emailAddress = document.getElementById('formEmail').value
    let message = document.getElementById('formText').value
    console.log(`${name} ${emailAddress} ${message}`);
  }

  return (
    <>
     <div className='d-flex justify-content-center align-items-center'>
      <Container style={{width: "650px"}}>
        <Row className='d-flex' align="center">
          <h1 className='help-title-text'>Contact Me</h1>
        </Row>
        <ContactFormController/>
      </Container>
     </div>
    </>
    
  )
}

export default Contact