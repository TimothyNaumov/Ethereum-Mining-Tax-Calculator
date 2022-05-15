import React, { Component, useContext, useState } from 'react';
import { Card } from '@nextui-org/react';
import {useAddress, useAddressUpdate} from './AddressContext';

const AddressBox = () => {
    const addressContext = useAddress();

    return (
        <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
            <p>Wallet Address: {addressContext}</p>
        </Card>
    );
};
 
export default AddressBox;