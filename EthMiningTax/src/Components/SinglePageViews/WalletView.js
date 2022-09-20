import React, { useState } from "react";
import {Container, Row, Form, Table } from 'react-bootstrap'

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
        <td>{`${toHumanTime(props.timeStamp).toString()}`}</td>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{`${toEther(props.value)} ETH`}</td>
    </tr>
);

const WalletView = (props) => {
    

    function transactionList(){
        //console.log(`Transactions is ${props.walletTransactions}`);
        
        return props.walletTransactions.map((transaction) => {
            return (
                <Transaction hash={transaction.hash} timeStamp={transaction.timeStamp} from={transaction.from} to={transaction.to} value={transaction.value} key={transaction.hash}/>
            );
        });
    };

    return (
        <div className="align-items-center component-section">
                <Container>
                    <div className="p-5 my-4 rounded-5 bg-light" align="left">
                        <h1>{props.address}</h1>
                        <h4>{props.balance}  ETH</h4>
                        <h4>$ 3,141,265.35</h4>
                        
                        <div className='table-wrapper-scroll-y my-custom-scrollbar table-striped table-hover'>
                            <Table responsive size='sm'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                            <tbody>{transactionList()}</tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WalletView