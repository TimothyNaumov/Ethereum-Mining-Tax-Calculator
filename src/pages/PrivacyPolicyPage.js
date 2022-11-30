import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import {Container, Row, Col} from 'react-bootstrap';
import safeCloud from '../assets/cloud-data-svgrepo-com.svg';
import protection from '../assets/protection-svg.svg';
import github from '../assets/github.svg';

const PrivacyPolicyPage = () => {
  return (
    <>
        <NavigationBar/>
        <div className="d-flex align-items-center">
            <Container fluid>
                <Row className="justify-content-md-center" align="center" style={{"padding": "75px 75px 75px 75px"}}>
                    <h1>Your data is safe with you</h1>
                </Row>
                <hr></hr>
                <Row className="justify-content-md-center" align="center"style={{"padding": "75px 75px 75px 75px"}}>
                    <Col>
                        <img src={safeCloud} alt="secure computer" style={{"height": "200px"}}/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center'>
                        <p className='privacy-policy-text'>
                        We do not not collect or store any of your data.
                        </p>
                    </Col>
                    <Col>
                        <img src={protection} alt="secure computer" style={{"height": "200px"}}/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center'>
                        <p className='privacy-policy-text'>
                        All of your Coinbase transactions are stored only in your browser and never uploaded to any servers.
                        </p>
                    </Col>
                    <Col>
                        <img src={github} alt="secure computer" style={{"height": "200px"}}/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center'>
                        <p className='privacy-policy-text'>
                        This is an open source project. You can view the source code <a href="https://github.com/TimothyNaumov/Ethereum-Mining-Tax-Calculator" target="_Blank">here</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* <div className="d-flex align-items-center component-section">
            <Container style={{width: "2000px"}}>
                <Row className="justify-content-md-center" align="center" style={{"padding": "50px 50px 50px 50px"}}>
                    <Col>
                        <img src={protection} alt="secure computer" style={{"height": "400px"}}/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center'>
                        <p className='privacy-policy-text'>
                        All of your Coinbase transactions are stored only in your browser and never uploaded to any servers.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="d-flex align-items-center component-section">
            <Container style={{width: "2000px"}}>
                <Row className="justify-content-md-center" align="center" style={{"padding": "50px 50px 50px 50px"}}>
                    <Col>
                        <img src={github} alt="secure computer" style={{"height": "400px"}}/>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center'>
                        <p className='privacy-policy-text'>
                        This is an open source project. You can view the source code <a href="https://github.com/TimothyNaumov/Ethereum-Mining-Tax-Calculator" target="_Blank">here</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div> */}
    </>
  )
}

export default PrivacyPolicyPage