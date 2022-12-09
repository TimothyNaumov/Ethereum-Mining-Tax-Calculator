// Import memo hook:
import { memo, useRef } from 'react'

// Import Field component:
import { Field } from './form-field'
import { TextArea } from './form-textarea'
import { Button } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios';

// Create the Field component:
export const ContactForm = memo((props) => {

  const captchaRef = useRef(null)

  async function checkCaptcha(){
    const token = captchaRef.current.getValue();

    console.log(token);

    await axios.post('http://localhost:8080/verifyCaptcha', {token})
        .then(res =>  console.log(res))
        .catch((error) => {
        console.log(error);
        })
  }

  return(
    <form onSubmit={props.onSubmit} noValidate>
    <Container>
      <Row>
        <Col>
          <Field
            labelText="First name"
            fieldType="text"
            fieldName="firstName"
            fieldValue={props.values.firstName}
            hasError={props.errors.firstName}
            onFieldChange={props.onFieldChange}
          />
        </Col>
        <Col>
          <Field
            labelText="Last name"
            fieldType="text"
            fieldName="lastName"
            fieldValue={props.values.lastName}
            hasError={props.errors.lastName}
            onFieldChange={props.onFieldChange}
          />
        </Col>
      </Row>
      <Row>
        <Field
          labelText="Email"
          fieldType="email"
          fieldName="email"
          fieldValue={props.values.email}
          hasError={props.errors.email}
          onFieldChange={props.onFieldChange}
        />
      </Row>
      <Row>
        <TextArea
          labelText="What can I do for you?"
          fieldName="message"
          fieldValue={props.values.message}
          hasError={props.errors.message}
          onFieldChange={props.onFieldChange}
        />
      </Row>
      <Row>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={checkCaptcha}
          ref={captchaRef}
        />
      </Row>
      <Row style={{paddingLeft: "12px", paddingTop:"12px"}}>
        <Button variant="primary" type="submit" style={{width: "100px"}}>
          Submit
        </Button>
      </Row>
    </Container>

    
  </form>
  )
})