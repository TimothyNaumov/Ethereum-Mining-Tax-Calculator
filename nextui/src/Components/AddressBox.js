import React, { Component, useContext, useState } from 'react';
import { Card } from '@nextui-org/react';
import {useAddress, useAddressUpdate} from './AddressContext';

const AddressBox = () => {
    const addressContext = useAddress();

    return (
        <div className='card'>
            <div className='card-body'>
                <p>Wallet Address: {addressContext} eth</p>
            </div>
        </div>
    );
};
 
export default AddressBox;
/*
<Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
            <p>Wallet Address: {addressContext}</p>
        </Card>
        */