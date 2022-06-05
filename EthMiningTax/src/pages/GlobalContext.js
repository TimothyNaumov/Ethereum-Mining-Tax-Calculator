import { TransactionsContext } from '../TransactionsContext';
import React, {useContext} from 'react';
function GlobalContext() {
    const {transactions, setTransactions} = useContext(TransactionsContext);

    function handleClick(e){
        console.log("transactions context returned " + JSON.stringify(transactions, null, 2));
    }

    function updateButton(e){
        setTransactions({walletTransactions: 2});
    }

    return ( 
        <div>
            <h1>Testing Global Context!</h1>
            <h1>The current transactions state is {JSON.stringify(transactions, null, 2)}</h1>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Click to print current state</button>
            <button type="button" className="btn btn-primary" onClick={updateButton}>Click to update current State</button>
        </div>
     );
}

export default GlobalContext;