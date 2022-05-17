//import React from "react";
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import React, { useContext, useEffect, useState } from "react";
import {useAddress, useAddressUpdate} from './AddressContext';
import '../App.css';

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
  }

  return(
    <div className='addressInputBox'>
      <Input placeholder="Ethereum Public Address" onChange={handleChange} width="470px" size='xl' />
      <Button onClick={onSubmit} size='xl'>Submit</Button>
    </div>
  )
}
 
export default AddressInput;