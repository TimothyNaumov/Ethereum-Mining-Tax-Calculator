import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar';

const Contact = () => {
  return (
    <>
     <NavigationBar/>
     <div className='d-flex justify-content-center align-items-center'>
      <Container style={{width: "650px"}}>
        <Row className='d-flex' align="center">
          <h1 className='help-title-text'>Contact Me</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label style={{fontSize: "20px"}}>Name</Form.Label>
              <Form.Control type="name" placeholder="Firstname Lastname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{fontSize: "20px"}}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
              <Form.Label style={{fontSize: "20px"}}>What can I help you with?</Form.Label>
              <textarea className='form-control' id="formText" rows="3"></textarea>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
     </div>
    </>
    
  )
}

export default Contact