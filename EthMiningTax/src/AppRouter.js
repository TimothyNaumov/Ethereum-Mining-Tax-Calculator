import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadCSV from './pages/UploadCSV';
import LinkWallet from './pages/LinkWallet';
import MainPage from './pages/MainPage';
import ViewCapitalDifference from './pages/ViewCapitalDifference';
import { TransactionsContext } from './TransactionsContext';

function AppRouter(){
    const [transactions, setTransactions] = useState({address: null, walletTransactions: null, exchangeTransactions: null});

    return (
        <BrowserRouter>
            <TransactionsContext.Provider value={{transactions, setTransactions}}>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="linkWallet" element={<LinkWallet/>}></Route>
                    <Route path='uploadCSV' element={<UploadCSV/>}/>
                    <Route path='viewCapitalDifference' element={<ViewCapitalDifference/>}/>
                </Routes>
            </TransactionsContext.Provider>
        </BrowserRouter>
    )
}

export default AppRouter;