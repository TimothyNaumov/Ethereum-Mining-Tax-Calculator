import { Table } from "@nextui-org/react";
import '../App.css';

import { subscribe } from './pubsub';
import { AddressEnteredEvent } from './project-events';
import React, { useState, useEffect } from 'react';

const Transaction = (props) => (
    <tr>
      <td>{props.from}</td>
      <td>{props.to}</td>
      <td>{props.value}</td>
    </tr>
  );


const TransactionBox = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const handle = subscribe(AddressEnteredEvent, (input) => {
            fetch(`http://localhost:4000/transactions?address=${input.inputAddress}`)
            .then(response => response.json())
            .then(data => setTransactions(data))
        });

        return function cleanup(){
            handle.unsubscribe()
        }
    });

    function transactionList(){
        console.log(`Transactions is ${transactions}`);
        
        return transactions.map((transaction) => {
            return (
                <Transaction from={transaction.from} to={transaction.to} value={transaction.value} key={transaction.hash}/>
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
        <div>
            <h3>Transactions</h3>
            <table className="table table-hover table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
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