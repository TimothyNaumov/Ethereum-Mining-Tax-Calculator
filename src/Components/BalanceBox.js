import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

import { subscribe } from './pubsub';
import { AddressEnteredEvent } from './project-events';

const BalanceBox = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const handle = subscribe(AddressEnteredEvent, (input) => {
            //fetch(`http://localhost:4000/accountbalance?address=${input.inputAddress}`)
            //.then(response => response.json())
            //.then(data => setBalance(data))
            axios.get(`http://localhost:4000/accountbalance?address=${input.inputAddress}`)
            .then(res => {
                const walletBalance = res.data;
                setBalance(walletBalance);
            })
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