import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadCSV from './pages/UploadCSV';
import LinkWallet from './pages/LinkWallet';
import MainPage from './pages/MainPage';
import ViewCapitalDifference from './pages/ViewCapitalDifference';
import { TransactionsContext } from './TransactionsContext';
import AccordionExample from './pages/AccordionExample';
import NavigationBar from './Components/NavigationBar';

function AppRouter(){
    const [transactions, setTransactions] = useState({address: null, walletTransactions: null, exchangeTransactions: null});

    return (
        <BrowserRouter>
            <NavigationBar/>
            <TransactionsContext.Provider value={{transactions, setTransactions}}>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="linkwallet" element={<LinkWallet/>}></Route>
                    <Route path='uploadCSV' element={<UploadCSV/>}/>
                    <Route path='viewCapitalDifference' element={<ViewCapitalDifference/>}/>
                    <Route path='Accordion' element={<AccordionExample/>}/>
                </Routes>
            </TransactionsContext.Provider>
        </BrowserRouter>
    )
}

export default AppRouter;