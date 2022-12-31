import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ContactFormController from './ContactFormController.js';


const Contact = () => {

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