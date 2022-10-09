import React from 'react'
import {Container, Row, Form, Button} from 'react-bootstrap'
const AddressInputView = (props) => {

    return (
    <div className="d-flex align-items-center component-section">
        <Container style={{width: "2000px"}}>
            <Row className="justify-content-md-center" align="center">
                <h1 className='main-page-title'>Ethereum Mining Tax Calculator</h1>
            </Row>
            <Row className="justify-content-md-center" align="center">
                <p style={{fontSize: "28px"}}>Generate your 8949 form for Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
                <p className='main-page-disclaimer'>We do not collect or store any of your data. <a href="/privary" target="_Blank">Learn more</a></p>
            </Row>
            <Row className="justify-content-md-center" align="center" style={{paddingTop: "25px"}}>
                <div className='demo-button'>
                    <Button style={{width: "75px", height: "60px"}} variant="outline-primary" onClick={props.setDemoValues}>Try Demo</Button>
                </div>
                <Form.Control style={{width: "900px", height: "60px"}} size="lg" type="text" placeholder="Let's start with your public Ethereum wallet address" onChange={props.handleAddressChange} onKeyPress={props.handleKeyPress}></Form.Control>
            </Row>
        </Container>
    </div>
    )
}

export default AddressInputView

//onClick={props.setDemoValues(true)}