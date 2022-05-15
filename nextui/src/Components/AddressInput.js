//import React from "react";
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from "react";
import {useAddress, useAddressUpdate} from './AddressContext';

import {AddressEnteredEvent} from './project-events';

import {publish} from './pubsub';

function AddressInput(){
  const [address, setAddress] = useState("");
  const updateAddress = useAddressUpdate();

  function handleChange(event){
    event.preventDefault();
    setAddress(event.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    updateAddress(address);
    publish(new AddressEnteredEvent({inputAddress: address}));
    //const setBalance = useContext(BalanceContext);
    //fetch('http://localhost:4000/accountbalance')
    //.then(response => response.json())
    //.then(data => setBalance(data))
    //.then(alert(`You address is ${address} and it has a balance of ${balance} eth`));
  }

  return(
    <div>
      <Input placeholder="Ethereum Public Address" onChange={handleChange} width="1200px" size='xl' />
      <Button onClick={onSubmit} size='xl'>Submit</Button>
    </div>
  )
}
 
export default AddressInput;