import React from 'react'
import Card from 'react-bootstrap/Card';

const HelpOptionCard = (props) => {
  return (
    <Card style={{ width: '18rem', height: '5rem'}} className='mx-5 my-5 help-option-card'>
      <Card.Body className='d-flex justify-content-center align-items-center stretched-link text-decoration-none' href='/'>
        <Card.Title style={{textAlign: "center"}}>
          {props.title}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default HelpOptionCard