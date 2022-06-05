import { createContext } from "react";

export const TransactionsContext = createContext(null);

//export default TransactionsContext;

/*

import React, {useContext, useState} from 'react';

const TransactionsContext = React.createContext();
const TransactionsUpdateContext = React.createContext();

export function useTransactions(){
    return useContext(TransactionsContext);
}

export function useTransactionsUpdate(){
    return useContext(TransactionsUpdateContext);
}

export function TransactionsProvider({children}){
    const [transactions, setTransactions] = useState({})

    function updateTransactions(newAddress){
        console.log("Setting address to: " + newAddress);
        setTransactions(newAddress);
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            <TransactionsUpdateContext.Provider value={updateTransactions}>
                {children}
            </TransactionsUpdateContext.Provider>
        </TransactionsContext.Provider>
    )
}

export default TransactionsContext;
*/