import {Container, Row, Form } from 'react-bootstrap'
import React, { useState } from "react";
import AddressInput from '../Components/AddressInput';
import UploadCSVBox from '../Components/UploadCSVBox';

function MainPage(){
    const [address, setAddress] = useState("");

    function handleAddressChange(e){
        e.preventDefault();
        setAddress(e.target.value);
    }

    function handleKeyPress(target){
        if(target.charCode == 13){
            alert(`You tried to submit your adress as ${address}`);
        }
    }

    return ( 
      <>
        <div className="d-flex align-items-center">
            <Container>
                <Row className="justify-content-md-center">
                    <div align="center">
                        <h1>Ethereum Mining Tools</h1>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                <div align="center">
                    <p className="lead">Generate your 8949 for your Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
                </div>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Control size="lg" type="text" placeholder="Let's start with your public Ethereum wallet address" onChange={handleAddressChange} onKeyPress={handleKeyPress}/>
                </Row>
            </Container>
            
        </div>
      </>
     );
}
 
export default MainPage;

/*<Container fluid="sm" >
            <Row className="justify-content-md-center">
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Link Wallet</h2>
                                <p>You wallet will be used to identify mining income from the moment it was transferred from your mining pool to your wallet. This will be used as your cost basis and determines the capital gain or loss of your assets from the time you recieved your income to the moment you sell Ethereum.</p>
                                <AddressInput/>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Row >
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Upload Exchange Transactions</h2>
                                <p>Download a csv or raw transactions from coinbase and upload it in the upload csv section to calculate your proceeds that capital gain or loss is determined from. Your proceeds will be compared to corresponding income from your mining wallet to determine your capital gain or loss.</p>
                                <UploadCSVBox/>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Generate Report</h2>
                                <p>After you have linked your mining wallet and uploaded a list of raw transactions you can generate and view your 8949 form. You can use different methods to calculate your capital gain or loss such as FIFO (First In First Out), LIFO (Last In Last Out), and HIFO (Highest In First Out).</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            </Container>
            */