// Import memo hook:
import { memo } from 'react'

// Import Field component:
import { Field } from './form-field'
import { TextArea } from './form-textarea'
import { Button } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap';

// Create the Field component:
export const ContactForm = memo((props) => (
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
        <TextArea
          labelText="What can I do for you?"
          fieldName="message"
          fieldValue={props.values.message}
          hasError={props.errors.message}
          onFieldChange={props.onFieldChange}
        />
      </Row>
    </Container>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
))