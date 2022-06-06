import { useContext, useEffect, useState } from 'react';
import {TransactionsContext } from '../TransactionsContext';

import { subscribe } from './pubsub';
import { AddressEnteredEvent } from './project-events';

const AddressBox = () => {
    const [displayAddress, setDisplayAddress] = useState("No Address Entered");
    const {transactions, setTransactions} = useContext(TransactionsContext);

    useEffect(() => {
        const handle = subscribe(AddressEnteredEvent, (input) => {
            //setting the displaay address to the address entered
            setDisplayAddress(input.inputAddress);

            //updating the global state to hold the wallet address
            let currentGlobalState = transactions;
            currentGlobalState.address = input.inputAddress;
            setTransactions(currentGlobalState);
        });
        return function cleanup(){
            handle.unsubscribe()
        }
    })

    return (
        <div className='card'>
            <div className='card-body'>
                <p>Wallet Address: {displayAddress}</p>
            </div>
        </div>
    );
};
 
export default AddressBox;