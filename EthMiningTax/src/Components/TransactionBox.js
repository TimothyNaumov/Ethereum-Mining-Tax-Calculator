import { Table } from "@nextui-org/react";
import '../App.css';

import { subscribe } from './pubsub';
import { AddressEnteredEvent } from './project-events';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TransactionsContext } from "../TransactionsContext";

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


const TransactionBox = () => {
    const [walletTransactions, setWalletTransactions] = useState([]);
    const {transactions, setTransactions} = useContext(TransactionsContext);


    useEffect(() => {
        
        const handle = subscribe(AddressEnteredEvent, (input) => {
            //fetch(`http://localhost:4000/transactions?address=${input.inputAddress}`)
            //.then(response => response.json())
            //.then(data => setTransactions(data))

            axios.get(`http://localhost:4000/transactions?address=${input.inputAddress}`)
            .then(res => {
                const importedWalletTransactions = res.data;
                setWalletTransactions(importedWalletTransactions);
                let currentGlobalState = transactions;
                currentGlobalState.walletTransactions = importedWalletTransactions;
                setTransactions(currentGlobalState);
            })
        });

        return function cleanup(){
            handle.unsubscribe()
        }
    });

    function transactionList(){
        console.log(`Transactions is ${walletTransactions}`);
        
        return walletTransactions.map((transaction) => {
            return (
                <Transaction hash={transaction.hash} timeStamp={transaction.timeStamp} from={transaction.from} to={transaction.to} value={transaction.value} key={transaction.hash}/>
            );
        });
        
    };
    /*
    const columns = [
        {
            key: "from",
            label: "FROM",
        },
        {
            key: "to",
            label: "TO",
        },
        {
            key: "value",
            label: "VALUE",
        },
    ];

    const rows = [];
    let rowKey = 1;
    transactions.forEach((transaction) => {
        let newRow = [];
        newRow.push(rowKey);
        newRow.push(transaction.from);
        newRow.push(transaction.to);
        newRow.push(transaction.value);
        rows.push(newRow);
        rowKey++;
    })
    console.log()
    */

    return (
        <div className="table-wrapper-scoll-y my-custom-scrollbar">
            <table id="dtVerticalScrollExample" className="table table-dark table-striped table-hover caption-top" style={{ marginTop: 20 }}>
                <caption><h1>All Transactions:</h1></caption>
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
    )
};

export default TransactionBox;

/*
<table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>{transactionList()}</tbody>
            </table>



return (
        <Table
            aria-label="Example table with dynamic content"
            css={{
            height: "auto",
            minWidth: "100%",
            }}
            > 
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column key={column.key}>{column.label}</Table.Column>
                )}
            </Table.Header>
            <Table.Body items={rows}>
                {(item) => (
                <Table.Row key={item.key}>
                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
                )}
            </Table.Body>
        </Table>
            
    );
*/