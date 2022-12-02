import React from 'react'
import NavigationBar from '../../Components/NavigationBar';
import {Container, Row, Col} from 'react-bootstrap';
import HealthOptionCard from '../../Components/Help/HelpOptionCard';


const HelpPage = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="d-flex align-items-center" style={{height: "100%"}}>
            <Container>
                <Row className='align-items-center' align="center">
                    <h1 className='help-title-text'>Help</h1>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <HealthOptionCard title="Upload Exchange Transactions" to="/help/exchangetransactions"/>
                    <HealthOptionCard title="Select Income Transactions" to="/help/importwallet"/>
                    <HealthOptionCard title="Contact Us" to="/help/contact"/>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default HelpPage

/*
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