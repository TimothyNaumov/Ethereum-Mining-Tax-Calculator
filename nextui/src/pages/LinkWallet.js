import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import '../App.css';
import AddressInput from '../Components/AddressInput';
import BalanceBox from '../Components/BalanceBox';
import AddressContext, { AddressProvider } from '../Components/AddressContext';
import AddressBox from '../Components/AddressBox';
import Header from '../Components/Header'
import GlobalStyles from '../Components/styles/Global';
import TransactionBox from '../Components/TransactionBox';
import ToUploadButton from '../Components/ToUploadButton';
import { TransactionsProvider } from '../TransactionsContext';

const LinkWallet = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
        <AddressProvider>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <AddressInput/>
                <ToUploadButton/>
              </div>
              <div className='col'>
                <AddressBox/>
                <BalanceBox/>
              </div>
            </div>
          </div>
          <TransactionBox/>
        </AddressProvider>
    </div>
  );
};

export default LinkWallet;
