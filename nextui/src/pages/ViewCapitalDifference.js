import React, {useContext} from "react";
import { TransactionsContext } from "../TransactionsContext";
function ViewCapitalDifference() {
    const {transactions} = useContext(TransactionsContext);
    let wallet = transactions.walletTransactions;
    let exchange = transactions.exchangeTransactions;
    let miningTransactions = [];
    let exchangeTransactions = [];

    function generateReport(){

        wallet.forEach(element => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            let valueInUSD;
            fetch(`http://localhost:5000/price?epoch=${element.timeStamp}`, requestOptions)
            .then(response => response.text())
            .then(result => valueInUSD = result)
            .catch(error => console.log('error', error));
                
            let walletTransaction = {
                value: valueInUSD,
                date: element.timeStamp
            }
            miningTransactions.push(walletTransaction);
        });

        exchange.forEach(element => {
            if(element["Transaction Type"] === "Sell"){
                let exchangeTransaction = {
                    value: element["Proceeds (excl. fees paid) (USD)"],
                    date: element["Date & time"]
                }
                exchangeTransactions.push(exchangeTransaction);
            }
            
        });

        console.log(JSON.stringify(miningTransactions, null, 2))
    }
    

    return ( 
        <div>
            <button className="btn btn-primary" onClick={generateReport}>Generate Capital Gain/Loss report</button>
            <p>{JSON.stringify(miningTransactions, null, 2)}</p>
            <p>{JSON.stringify(exchangeTransactions, null, 2)}</p>
        </div>
     );
}

export default ViewCapitalDifference;