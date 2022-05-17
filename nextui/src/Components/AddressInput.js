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
    <form>
      <div class="form-group">
      <label for="exampleInputEmail1">Public Ethereum Wallet Address</label>
        <div className='row'>
          <div className='col'>
            
            <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Enter Ethereum Wallet Address"></input>
            <small id="emailHelp" class="form-text text-muted">All the information will display using this address</small>
          </div>
          <div className='col'>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
        
      </div>
      
    </form>
  );
};

export default AddressInput;

/*
<div className='addressInputBox'>
      <Input placeholder="Ethereum Public Address" onChange={handleChange} width="470px" size='xl' />
      <Button onClick={onSubmit} size='xl'>Submit</Button>
    </div> 


<form>
      <div class="form-group">
        <label for="inputAddress">Ethereum Wallet Address</label>
        <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeHolder="Enter Ethereum Wallet Address">
      </div>
    </form>
*/
 
