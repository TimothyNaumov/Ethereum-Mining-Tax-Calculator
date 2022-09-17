import {Container, Row, Form } from 'react-bootstrap'
import React, { useState } from "react";
import axios from 'axios';

function toEther(wei){
    return  wei / Math.pow(10, 18);
}

function toHumanTime(epochTime){
    return new Date( epochTime * 1000);
}

const Transaction = (props) => (
    <tr>
        <td>{props.hash}</td>
        <td>{`${toHumanTime(props.timeStamp).toString()}`}</td>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{`${toEther(props.value)} Ether`}</td>
    </tr>
);

function MainPage(){
    const [address, setAddress] = useState("");
    const [walletTransactions, setWalletTransactions] = useState([]);

    function handleAddressChange(e){
        e.preventDefault();
        setAddress(e.target.value);
    }

    function handleKeyPress(target){
        if(target.charCode === 13){
            alert(`You tried to submit your adress as ${address}`);

            axios.get(`http://localhost:4000/transactions?address=${address}`)
            .then(res => {
                const importedWalletTransactions = res.data;
                setWalletTransactions(importedWalletTransactions);
            })
        }
    }

    function transactionList(){
        console.log(`Transactions is ${walletTransactions}`);
        
        return walletTransactions.map((transaction) => {
            return (
                <Transaction hash={transaction.hash} timeStamp={transaction.timeStamp} from={transaction.from} to={transaction.to} value={transaction.value} key={transaction.hash}/>
            );
        });
        
    };

    return ( 
      <>
        <div className="d-flex align-items-center">
            <Container>
                <Row className="justify-content-md-center" align="center">
                    <h1>Ethereum Mining Tools</h1>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <p className="lead">Generate your 8949 for your Sales and Other Dispositions of Capital Assets using your Ethereum mining wallet and a list of transactions from your exchange</p>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <Form.Control size="lg" type="text" placeholder="Let's start with your public Ethereum wallet address" onChange={handleAddressChange} onKeyPress={handleKeyPress}/>
                </Row>
            </Container>
            
        </div>
        <div className="d-flex align-items-center">
            <Container>
                <div className="p-5 my-4 rounded-5 bg-light" align="left">
                    <h1>{address}</h1>
                    <h4>0.37911862071608077  ETH</h4>
                    <h4>$ 539.60</h4>

                    <div className="table-wrapper-scoll-y my-custom-scrollbar">
                    <table id="dtVerticalScrollExample" className="table table-dark table-striped table-hover caption-top" style={{ marginTop: 20 }}>
                        <caption><h1>Wallet Transactions:</h1></caption>
                        <thead>
                            <tr>
                                <th>Transaction Hash</th>
                                <th>Date and Time</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>{transactionList()}</tbody>
                    </table>
        </div>
                </div>
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