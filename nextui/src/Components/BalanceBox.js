import React, { Component, useContext, useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import '../App.css';

import { subscribe } from './pubsub';
import { useFilter } from '@nextui-org/react/node_modules/@react-aria/i18n';
import { AddressEnteredEvent } from './project-events';

const BalanceBox = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const handle = subscribe(AddressEnteredEvent, (input) => {
            fetch(`http://localhost:4000/accountbalance?address=${input.inputAddress}`)
            .then(response => response.json())
            .then(data => setBalance(data))
        });
        return function cleanup(){
            handle.unsubscribe()
        }
    })

    return (
        <div className='addressDisplayBox'>
            <div className='card'>
                <div className='card-body'>
                    <p>Balance: {balance} eth</p>
                </div>
            </div>
        </div>
    );
};

export default BalanceBox;
/*
<Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
                <p>Balance: {balance} eth</p>
            </Card>
            */