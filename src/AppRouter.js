import React from 'react';
import SingleMainPage from './pages/SingleMainPage';
import HelpPage from './pages/HelpPages/HelpPage';
import ExchangeTransactionsHelp from './pages/HelpPages/Help.ExchangeTransactions';
import ImportWalletHelp from './pages/HelpPages/Help.ImportWallet';
import Contact from './pages/HelpPages/Help.Contact';
import About from './pages/About';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';

function AppRouter(){
    return (
        <>
        <NavigationBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingleMainPage/>}/>
                <Route path="/help" element={<HelpPage/>}/>
                <Route path="/help/exchangetransactions" element={<ExchangeTransactionsHelp/>}></Route>
                <Route path="/help/importwallet" element={<ImportWalletHelp/>}></Route>
                <Route path="/help/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRouter;