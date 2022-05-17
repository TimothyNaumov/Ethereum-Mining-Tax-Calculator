import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import './App.css';
import AddressInput from './Components/AddressInput';
import BalanceBox from './Components/BalanceBox';
import { AddressProvider } from './Components/AddressContext';
import AddressBox from './Components/AddressBox';
import Header from './Components/Header'
import GlobalStyles from './Components/styles/Global';
import TransactionBox from './Components/TransactionBox';



const App = () => {

  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <AddressProvider>
        <AddressInput/>
        <AddressBox/>
        <BalanceBox/>
        <TransactionBox/>
      </AddressProvider>
    </div>
  );
};

export default App;
