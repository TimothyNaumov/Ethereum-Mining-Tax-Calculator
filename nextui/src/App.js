import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import './App.css';
import AddressInput from './Components/AddressInput';
import BalanceBox from './Components/BalanceBox';
import BalanceContext from "./Components/balance-context";
import { BalanceProvider } from './Components/balance-context';
import { AddressProvider } from './Components/AddressContext';
import AddressBox from './Components/AddressBox';



const App = () => {

  //const Balance = useState(69);
  //const value = Balance

  return (
    <div >
      <AddressProvider>
        <AddressInput/>
        <AddressBox/>
        <BalanceBox/>
      </AddressProvider>
    </div>
    
  );
};

export default App;
