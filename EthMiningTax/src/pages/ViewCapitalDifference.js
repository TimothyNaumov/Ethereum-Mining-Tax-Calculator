import React, {useContext, useEffect, useState} from "react";
import { TransactionsContext } from "../TransactionsContext";
import generateGainLossTransactions from '../TaxGenerator';
import NavigationBar from '../Components/NavigationBar';
function ViewCapitalDifference() {
    const {transactions} = useContext(TransactionsContext);
    let wallet = transactions.walletTransactions;
    let exchange = transactions.exchangeTransactions;
    const [miningTransactions, setMiningTransactions] = useState([]);
    const [exchangeTransactions, setExchangeTransactions] = useState([]);
    const [report, setReport] = useState([]);

    function epochToEndOfDay(epoch){
        return Math.ceil(epoch / 86400) * 86400
    }

    function toEther(wei){
        return  wei / Math.pow(10, 18);
    }

    useEffect(() => {
        
        const walletTransactions = transactions.walletTransactions;
        console.log(walletTransactions);
        let startRange = epochToEndOfDay(walletTransactions[0].timeStamp);
        let endRange = epochToEndOfDay(walletTransactions[walletTransactions.length - 1].timeStamp);
        console.log(`start: ${startRange} end: ${endRange}`);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${startRange}&to=${endRange}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let pricesAsArray = result.prices;
            console.log(pricesAsArray);
            let associativeArray = {};
            pricesAsArray.forEach(element => {
                let epoch = element[0];
                let priceAtEpoch = element[1]
                associativeArray[epoch] = priceAtEpoch; 
            });
            console.log(associativeArray);
            // * associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)]
            const incomeTransactionsFromWallet = walletTransactions.filter(element => element.to === "0x750ca59270bdf16507ff977037a49a8cfb6f98b9" && element.value != 0).map(element => (
                {
                    epoch: element.timeStamp,
                    isoDate: new Date(element.timeStamp * 1000),
                    incomeInUSD: toEther(element.value) * associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)],
                    ether: toEther(element.value),
                    etherPriceOnIncomeDate: associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)]
                }
            ));
            setMiningTransactions(incomeTransactionsFromWallet);

            const exchangeTransactions = transactions.exchangeTransactions;
            const sellingTransactionsFromExchange = exchangeTransactions.filter(element => element["Transaction Type"] === "Sell").map(element => (
                {
                    Date: element["Date & time"],
                    Epoch: new Date(element["Date & time"]).getTime(),
                    EpochAtEndOfDay: epochToEndOfDay(new Date(element["Date & time"]).getTime() / 1000),
                    Proceeds: element["Proceeds (excl. fees paid) (USD)"],
                    QuantityDisposed: element["Quantity Disposed"],
                    EtherPriceOnSellDate: associativeArray[epochToEndOfDay(new Date(element["Date & time"]).getTime() / 1000) * 1000]
                }
            ));
            //associativeArray[(epochToEndOfDay(new Date(element["Date & time"]).getTime()) * 1000)]
            setExchangeTransactions(sellingTransactionsFromExchange);
            setReport(generateGainLossTransactions(incomeTransactionsFromWallet, sellingTransactionsFromExchange));
        })
        .catch(error => console.log('error', error));

        
    }, []);

    return (
        <div>
            <NavigationBar/>
            <div className="row">
                <div className="col">
                    <pre>{JSON.stringify(miningTransactions, null, 2)}</pre>
                </div>
                <div className="col">
                    <pre>{JSON.stringify(exchangeTransactions, null, 2)}</pre>  
                </div>
                <div className="col">
                <pre>{JSON.stringify(report, null, 2)}</pre>
                </div>
                
            </div>
        </div>
    );
}

export default ViewCapitalDifference;


/*
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
                tempMiningTransactions.push(walletTransaction);
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
        tempMiningTransactions.push(walletTransaction);
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




const [transactions, setTransaction] = useState({value: 1});

    return ( 
        <div>
            <h1>Capital Gain/Loss report</h1>
            <pre>report: {JSON.stringify(transactions, null, 2)}</pre>
        </div>
    );




const [transactions, setTransactions] = useState([{date: 11, value: 2}, {date: 12, value: 3}]);

    const addElement = () => {
        let newTransaction = {date: 13, value: 4};
        let currentTransactions = [...transactions];
        console.log(JSON.stringify(currentTransactions, null, 2))
        currentTransactions.push(newTransaction);
        console.log(JSON.stringify(currentTransactions, null, 2))
        setTransactions(currentTransactions);
        console.log(JSON.stringify(transactions, null, 2))
        //setTransactions({...transactions});
    }

    return ( 
        <div>
            <h1>Capital Gain/Loss report</h1>
            <pre>report: {JSON.stringify(transactions, null, 2)}</pre>
            <button onClick={addElement}>Press to add new element</button>
        </div>
    );
*/