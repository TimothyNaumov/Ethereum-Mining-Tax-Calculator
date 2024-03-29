import React, { useEffect } from "react";
import {Container, Table, Button } from 'react-bootstrap'

function toEther(wei){
    return (wei / Math.pow(10, 18)).toFixed(3);
}

function toHumanTime(epochTime){
    let date = new Date( epochTime * 1000);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
}

const Transaction = (props) => (
    <tr>
        <td>{`${toHumanTime(props.transaction.timeStamp).toString()}`}</td>
        <td>{props.transaction.from}</td>
        <td>{props.transaction.to}</td>
        <td>{`${toEther(props.transaction.value)} ETH`}</td>
        <td>{(props.transaction.usd * toEther(props.transaction.value)).toFixed(2)}</td>
    </tr>
);

const WalletView = (props) => {
    

    function transactionList(){
        return props.state.walletTransactions.map((transaction) => {
            return (
                <Transaction transaction={transaction}/>
            );
        });
    };
    

    return (
        <div className="align-items-center component-section">
            <Container>
                <div className="p-5 my-4 rounded-5 bg-light info-table" align="left">
                    <h1>{props.state.address}</h1>
                    <h4>{toEther(props.state.balance.wei)} ETH</h4>
                    <h4>$ {props.state.balance.usd}</h4>
                    
                    <div className='table-wrapper-scroll-y my-custom-scrollbar table-striped table-hover'>
                        <Table responsive size='sm'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Value (ETH)</th>
                                    <th>Value (USD)</th>
                                </tr>
                            </thead>
                        <tbody>{transactionList()}</tbody>
                        </Table>
                    </div>
                    <div className="align-items-center confirmation-container">
                        <div className="confirmationtextElement">
                            <h2>Is this your wallet?</h2>
                        </div>
                        <div className="confirmationtextElement">
                            <Button variant="outline-success" size="lg" onClick={() => props.dispatch({type: "WalletVerified"})}>Yes</Button>{' '}
                        </div>
                        <div className="confirmationtextElement">
                            <Button variant="outline-danger" size="lg" onClick={() => props.dispatch({type: "ResetView"})}>No</Button>{' '}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WalletView