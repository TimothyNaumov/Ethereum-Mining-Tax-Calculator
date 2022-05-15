import React, { Component, useContext, useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import {useAddress, useAddressUpdate} from './AddressContext';

import { subscribe } from './pubsub';
import { useFilter } from '@nextui-org/react/node_modules/@react-aria/i18n';
import { AddressEnteredEvent } from './project-events';

const BalanceBox = () => {
    const [balance, setBalance] = useState(0);
    const address = useAddress();

    useEffect(() => {
        console.log(`Balance Box Component has been rerendered with address ${address}`)
        const handle = subscribe(AddressEnteredEvent, (inputAddress) => {
            fetch(`http://localhost:4000/accountbalance?address=${address}`)
            .then(response => response.json())
            .then(data => setBalance(data))
        });

        return function cleanup(){
            handle.unsubscribe()
        }
    })

    return (
        <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
            <p>Balance: {balance} eth</p>
        </Card>
    );
};
 
export default BalanceBox;