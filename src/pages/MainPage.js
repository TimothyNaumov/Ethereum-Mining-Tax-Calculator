import NavigationBar from "../Components/NavigationBar";
import Jumbo from "../Components/Jumbo";
// import Accordion from 'react-bootstrap/Accordion';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

import {Button, Container, Row, Col, Card, Accordion } from 'react-bootstrap'
//import Button from 'react-bootstrap/Button';
import React from "react";
import {Link} from 'react-router-dom';

function MainPage(){

    return ( 
      <>
        <Container fluid> 
          <Row className="justify-content-md-center">
            <div className="p-5 my-4 rounded-3 bg-light">
              <h1>Ethereum Mining Tools</h1>
              <p className="lead">Generate your 8949 for your Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
            </div>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <h2>Link Wallet</h2>
                  <p>You wallet will be used to identify mining income from the moment it was transferred from your mining pool to your wallet. This will be used as your cost basis and determines the capital gain or loss of your assets from the time you recieved your income to the moment you sell Ethereum.</p>
                  <Link to='/linkwallet' className="btn btn-primary">Click to get started</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h2>Upload Exchange Transactions</h2>
                  <p>Download a csv or raw transactions from coinbase and upload it in the upload csv section to calculate your proceeds that capital gain or loss is determined from. Your proceeds will be compared to corresponding income from your mining wallet to determine your capital gain or loss.</p>
                  <Link to='/uploadcsv' className="btn btn-secondary">Upload Exchange Transactions</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <h2>Generate Report</h2>
                  <p>After you have linked your mining wallet and uploaded a list of raw transactions you can generate and view your 8949 form. You can use different methods to calculate your capital gain or loss such as FIFO (First In First Out), LIFO (Last In Last Out), and HIFO (Highest In First Out).</p>
                  <Link to='/viewCapitalDifference' className="btn btn-secondary">View your Taxes</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><h2>FIFO</h2></Accordion.Header>
              <Accordion.Body>
                <p>FIFO stands for First in First out and represents a capital gain loss calculation method that determines cost basis income transactions from when they were recieved as payment from a mining pool. When you sell Ethereum for the first time, the cost basis transaction with FIFO is the very first income transaction you ever recieved from a mining pool.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h2>LIFO</h2></Accordion.Header>
              <Accordion.Body>
                <p>LIFO stands for Last in First out and represents a capital gain loss calculation method that determines cost basis income transactions from when they were recieved as payment from a mining pool. Unlike FIFO, LIFO uses the last income payment received at the time of the selling transaction as the cost basis. This means if you are selling Ethereum for the first time, your cost basis will be determined from the latest payment you recieved into your wallet from your mining pool.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><h2>HIFO</h2></Accordion.Header>
              <Accordion.Body>
                <p>HIFO stands for Highest in First out and represents a capital gain loss calculation method that determines cost basis income transactions from the amount that you received as payment. The cost basis transaction is determined based on the highest paying transaction you received up to the date of your sell. This means if you are selling Ethereum for the first time, your cost basis transaction will be determined based on the highest income transaction you received from your mining pool.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
     );
}
 
export default MainPage;

/*
<div className="container-fluid">
          <div className="p-5 my-4 rounded-3 bg-light">
            <h1>Ethereum Mining Tools</h1>
            <p className="lead">Generate your 8949 for your Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
            <Link to='/linkwallet' className="btn btn-primary">Click to get started</Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Link Wallet</h2>
                  <p>You wallet will be used to identify mining income from the moment it was transferred from your mining pool to your wallet. This will be used as your cost basis and determines the capital gain or loss of your assets from the time you recieved your income to the moment you sell Ethereum.</p>
                  <NextButton destination="/linkwallet" text="Click to Link your Wallet"/>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Upload Exchange Transactions</h2>
                  <p>Download a csv or raw transactions from coinbase and upload it in the upload csv section to calculate your proceeds that capital gain or loss is determined from. Your proceeds will be compared to corresponding income from your mining wallet to determine your capital gain or loss.</p>
                  <button type="button" className="btn btn-secondary" disabled>Upload CSV</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Generate 8949 Report</h2>
                  <p>After you have linked your mining wallet and uploaded a list of raw transactions you can generate and view your 8949 form. You can use different methods to calculate your capital gain or loss such as FIFO (First In First Out), LIFO (Last In Last Out), and HIFO (Highest In First Out).</p>
                  <button type="button" className="btn btn-secondary" disabled>Generate and view 8949 form</button>
                </div>
              </div>
            </div>
          </div>





<div className='p-5 text-center bg-image' style={{ backgroundColor: "#45728c", height:"100%", width: "100%"}}>
          <div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-white'>
                <h1 className='mb-3'>Ethereum Mining Capital Gain/Loss Calculator</h1>
                  <NextButton destination="/linkWallet" text="Click to link wallet"/>
              </div>
            </div>
          </div>
        </div> 




        <div className="accordion" id="myAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne"><h2>What is FIFO?</h2></button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <p>FIFO stands for First in First out and represents a capital gain loss calcualtion method that determines cost basis income transactions from when they were recieved. When you sell Ethereum for the first time, the cost basis transaction with FIFO is the very first income transaction you ever recieved from a mining pool.</p>
                  </div>
                </div>
              </div> 
            </div>

            <div className="m-4">
            <div className="accordion" id="myAccordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is HTML?</button>									
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                        <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank">Learn more.</a></p>
                    </div>
                </div>
            </div>
          </div>
          </div>
        */