import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadCSV from './pages/UploadCSV';
import LinkWallet from './pages/LinkWallet';
import MainPage from './pages/MainPage';
import ViewCapitalDifference from './pages/ViewCapitalDifference';
import { TransactionsContext } from './TransactionsContext';
import NavigationBar from './Components/NavigationBar';
import SingleMainPage from './pages/SingleMainPage';

function AppRouter(){
    const [transactions, setTransactions] = useState({address: null, walletTransactions: null, exchangeTransactions: null});

    return (
        <SingleMainPage/>
    )
}

export default AppRouter;