import React from 'react'
import Card from 'react-bootstrap/Card';

const HelpOptionCard = (props) => {
  return (
    <Card style={{ width: '18rem', height: '5rem'}} className='mx-5 my-5 help-option-card'>
      <Card.Body className='d-flex justify-content-center align-items-center'>
        <Card.Title style={{textAlign: "center"}}>
          <a href={props.to} className='stretched-link text-reset text-decoration-none'>{props.title}</a>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default HelpOptionCard