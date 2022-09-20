import React from 'react'
import {Container, Row, Form} from 'react-bootstrap'
const AddressInputView = (props) => {
  return (
    <div className="d-flex align-items-center component-section">
            <Container>
                <Row className="justify-content-md-center" align="center">
                    <h1>Ethereum Mining Tools</h1>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <p className="lead">Generate your 8949 for your Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <Form.Control size="lg" type="text" placeholder="Let's start with your public Ethereum wallet address" onChange={props.handleAddressChange} onKeyPress={props.handleKeyPress}/>
                </Row>
            </Container>
        </div>
  )
}

export default AddressInputView