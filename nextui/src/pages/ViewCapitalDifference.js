import React, {useContext, useState} from "react";
import { TransactionsContext } from "../TransactionsContext";
function ViewCapitalDifference() {
    const {transactions} = useContext(TransactionsContext);
    let wallet = transactions.walletTransactions;
    let exchange = transactions.exchangeTransactions;
    const [miningTransactions, setMiningTransactions] = useState([]);
    //let miningTransactions = [];
    let exchangeTransactions = [];

    function generateReport(){

        wallet.forEach(element => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch(`http://localhost:5000/price?epoch=${element.timeStamp}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let walletTransaction = {
                    value: result,
                    date: element.timeStamp
                }
                console.log("mining transaction during populating: " + JSON.stringify(walletTransaction, null, 2));
                let tempMiningTransactions = miningTransactions;
                tempMiningTransactions.push(walletTransaction)
                setMiningTransactions(tempMiningTransactions);
                //miningTransactions.push(walletTransaction);
            })
            .then(console.log("mining transactions after populating: " + JSON.stringify(miningTransactions, null, 2)))
            .catch(error => console.log('error', error));
        });

        console.log("When mining transactions has been populated it is: " + JSON.stringify(miningTransactions, null, 2))
        


        exchange.forEach(element => {
            if(element["Transaction Type"] === "Sell"){
                let exchangeTransaction = {
                    value: element["Proceeds (excl. fees paid) (USD)"],
                    date: element["Date & time"]
                }
                exchangeTransactions.push(exchangeTransaction);
            }
            
        });

        
    }

    function addElement(){
        let walletTransaction = {
            value: 1,
            date: 2
        }

        let tempMiningTransactions = miningTransactions;
        tempMiningTransactions.push(walletTransaction)
        setMiningTransactions(tempMiningTransactions);
        //miningTransactions.push(walletTransaction);
    }
    

    return ( 
        <div>
            <button className="btn btn-primary" onClick={generateReport}>Generate Capital Gain/Loss report</button>
            <button className="btn btn-primary" onClick={addElement}>Add sample Transaction to miningTransactions</button>
            <p>{JSON.stringify(miningTransactions, null, 2)}</p>
            <p>{JSON.stringify(exchangeTransactions, null, 2)}</p>
        </div>
     );
}

export default ViewCapitalDifference;