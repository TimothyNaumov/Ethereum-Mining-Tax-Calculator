import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar';


const HelpPage = () => {
  return (
    <div>
        <NavigationBar/>
        <div className='d-flex flex-column p-2 help-title-banner'>
            <h1 className='help-title-text'>How to download your exchange transactions</h1>
            <ol type = "1" style={{fontSize: "30px"}}>
                <li><a href="https://help.coinbase.com/en/coinbase/taxes-reports-and-financial-services/reports/transaction-report" target="_blank" rel="noreferrer">Official Coinbase instructions</a></li>
                <li>Find your "Raw transactions report (CSV)" under tax documents</li>
                <li>Upload your raw transactions report csv file in the upload exchange transactions prompt</li>
            </ol>
            <h1 className='help-title-text'>What is a public Ethereum wallet?</h1>
            <ul style={{fontSize: "30px"}}>
                <li>If you own Ethereum, you have a public Ethereum wallet address used to find information about your transactions and wallet balance</li>
                <li>It should look something like this: 0x00000000219ab540356cBB839Cbe05303d7705Fa</li>
            </ul>
        </div>
        
    </div>
  );
}

export default HelpPage

/*
<Container>
    <div className='bg-light'>
        <h1 style={{fontSize: "75px"}}>How to link your Ethereum Wallet</h1>
    </div>
</Container>

<Container fluid className='help-title-banner'>
            <Row>
                <Col className='align-self-center'>
                    <h1 style={{fontSize: "80px"}}>How to link your Ethereum Wallet</h1>
                </Col>
            </Row>
        </Container>

<div className='d-xl-flex p-2 align-items-center help-content-container'>
            
        </div>
*/