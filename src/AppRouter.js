import React, {useState} from 'react';
import SingleMainPage from './pages/SingleMainPage';

function AppRouter(){
    const [transactions, setTransactions] = useState({address: null, walletTransactions: null, exchangeTransactions: null});

    return (
        <SingleMainPage/>
    )
}

export default AppRouter;