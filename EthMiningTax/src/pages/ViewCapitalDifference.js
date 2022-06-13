import React, {useContext, useEffect, useState} from "react";
import { TransactionsContext } from "../TransactionsContext";
import generateGainLossTransactions from '../TaxGenerator';
import NavigationBar from '../Components/NavigationBar';

const testcaseincome1 = [
    {
      "epoch": "1612652469",
      "isoDate": "2021-02-06T23:01:09Z",
      "incomeInUSD": 10.08,
      "ether": 0.0059,
      "etherPriceOnIncomeDate": 1677.85
    },
    {
      "epoch": "1622319361",
      "isoDate": "2021-05-29T20:16:01Z",
      "incomeInUSD": 340.00,
      "ether": 0.15,
      "etherPriceOnIncomeDate": 2294.626285512794
    },
    {
      "epoch": "1624106889",
      "isoDate": "2021-06-19T12:48:09Z",
      "incomeInUSD": 22.55,
      "ether": 0.01,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624107043",
      "isoDate": "2021-06-19T12:50:43Z",
      "incomeInUSD": 450.61,
      "ether": 0.2,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624107121",
      "isoDate": "2021-06-19T12:52:01Z",
      "incomeInUSD": 161.24,
      "ether": 0.0715429,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624983230",
      "isoDate": "2021-06-29T16:13:50Z",
      "incomeInUSD": 219.34,
      "ether": 0.09924501,
      "etherPriceOnIncomeDate": 2169.400067865984
    },
    {
      "epoch": "1626195303",
      "isoDate": "2021-07-13T16:55:03Z",
      "incomeInUSD": 100.99,
      "ether": 0.05077169,
      "etherPriceOnIncomeDate": 1944.3950166372085
    },
    {
      "epoch": "1627344699",
      "isoDate": "2021-07-27T00:11:39Z",
      "incomeInUSD": 119.89,
      "ether": 0.05382635,
      "etherPriceOnIncomeDate": 2292.579636803809
    },
    {
      "epoch": "1628878683",
      "isoDate": "2021-08-13T18:18:03Z",
      "incomeInUSD": 162.72,
      "ether": 0.05040702,
      "etherPriceOnIncomeDate": 3323.19799054098
    }
  ];

const testcaseincome2 = [
    {
      "epoch": "1612652469",
      "isoDate": "2021-02-06T23:01:09Z",
      "incomeInUSD": 10.08,
      "ether": 0.003527,
      "etherPriceOnIncomeDate": 1677.85
    },
    {
      "epoch": "1622319361",
      "isoDate": "2021-05-29T20:16:01Z",
      "incomeInUSD": 340.00,
      "ether": 0.144183,
      "etherPriceOnIncomeDate": 2294.626285512794
    },
    {
      "epoch": "1624106889",
      "isoDate": "2021-06-19T12:48:09Z",
      "incomeInUSD": 22.55,
      "ether": 0.009727,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624107043",
      "isoDate": "2021-06-19T12:50:43Z",
      "incomeInUSD": 450.61,
      "ether": 0.199727,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624107121",
      "isoDate": "2021-06-19T12:52:01Z",
      "incomeInUSD": 161.24,
      "ether": 0.0712909,
      "etherPriceOnIncomeDate": 2176.308536317709
    },
    {
      "epoch": "1624983230",
      "isoDate": "2021-06-29T16:13:50Z",
      "incomeInUSD": 219.34,
      "ether": 0.09924501,
      "etherPriceOnIncomeDate": 2169.400067865984
    },
    {
      "epoch": "1626195303",
      "isoDate": "2021-07-13T16:55:03Z",
      "incomeInUSD": 100.99,
      "ether": 0.05077169,
      "etherPriceOnIncomeDate": 1944.3950166372085
    },
    {
      "epoch": "1627344699",
      "isoDate": "2021-07-27T00:11:39Z",
      "incomeInUSD": 119.89,
      "ether": 0.05382635,
      "etherPriceOnIncomeDate": 2292.579636803809
    },
    {
      "epoch": "1628878683",
      "isoDate": "2021-08-13T18:18:03Z",
      "incomeInUSD": 162.72,
      "ether": 0.05040702,
      "etherPriceOnIncomeDate": 3323.19799054098
    }
  ];

const GainLossTransaction = (props) => (
    <tr>
        <td>{props.AcquireDate}</td>
        <td>{props.SellDate}</td>
        <td>{props.CostBasis}</td>
        <td>{props.Proceeds}</td>
        <td>{props.Adjustment.toFixed(2)}</td>
        <td>{props.CapitalGainLoss}</td>
        
    </tr>
)

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
        return wei / Math.pow(10, 18);
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
            const incomeTransactionsFromWallet = walletTransactions.filter(element => element.from === "0x750ca59270bdf16507ff977037a49a8cfb6f98b9" && element.value != 0).map(element => (
                {
                    epoch: element.timeStamp,
                    isoDate: new Date(element.timeStamp * 1000),
                    incomeInUSD: toEther(element.value) * associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)],
                    ether: toEther(element.value),
                    etherPriceOnIncomeDate: associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)],
                    TransactionFeeQuantity: toEther(element.gasPrice * element.gasUsed),
                    TransactionFeePrice: toEther(element.gasPrice * element.gasUsed) * associativeArray[(epochToEndOfDay(element.timeStamp) * 1000)]
                }
            ));
            setMiningTransactions(incomeTransactionsFromWallet);

            const exchangeTransactions = transactions.exchangeTransactions;
            const sellingTransactionsFromExchange = exchangeTransactions.filter(element => element["Transaction Type"] === "Sell").map(element => (
            //commented out filter operation to inlclude coinbase income transactions for FIFO test on CoinTracker
            //const sellingTransactionsFromExchange = exchangeTransactions.map(element => (
                {
                    Date: element["Date & time"],
                    Type: element["Transaction Type"],
                    Epoch: new Date(element["Date & time"]).getTime(),
                    EpochAtEndOfDay: epochToEndOfDay(new Date(element["Date & time"]).getTime() / 1000),
                    Proceeds: element["Proceeds (excl. fees paid) (USD)"],
                    QuantityDisposed: element["Quantity Disposed"],
                    EtherPriceOnSellDate: associativeArray[epochToEndOfDay(new Date(element["Date & time"]).getTime() / 1000) * 1000]
                }
            ));
            //associativeArray[(epochToEndOfDay(new Date(element["Date & time"]).getTime()) * 1000)]
            setExchangeTransactions(sellingTransactionsFromExchange);
            //temporarily using testcaseincome1 for income tranactions to test cointracker fifo report
            setReport(generateGainLossTransactions(incomeTransactionsFromWallet, sellingTransactionsFromExchange));
        })
        .catch(error => console.log('error', error));

        
    }, []);

    function transactionList(){
        return report.map((transaction) => {
            return (
                <GainLossTransaction AcquireDate={transaction.AcquireDate} SellDate={transaction.SellDate} CostBasis={transaction.CostBasis} Proceeds={transaction.Proceeds} CapitalGainLoss={transaction.CapitalGainLoss} Adjustment={transaction.Adjustment} key={transaction.CapitalGainLoss}/>
            );
        });
    }
    
    function transactionSums(){
        const costBasisSum = report.reduce(
            (previousValue, currentValue) => previousValue + parseInt(currentValue.CostBasis),
            0
        );
        const ProceedsSum = report.reduce(
            (previousValue, currentValue) => previousValue + parseInt(currentValue.Proceeds),
            0
        );
        const AdjustmentSum = report.reduce(
            (previousValue, currentValue) => previousValue + parseInt(currentValue.Adjustment),
            0
        );
        const capitalGainSum = report.reduce(
            (previousValue, currentValue) => previousValue + parseInt(currentValue.CapitalGainLoss),
            0
        );

        return (<GainLossTransaction AcquireDate="Totals: " SellDate="" CostBasis={costBasisSum} Proceeds={ProceedsSum} CapitalGainLoss={capitalGainSum} Adjustment={AdjustmentSum}/>);
    }
    

    return (
        <div>
            <NavigationBar/>
            <table id="dtVerticalScrollExample" className="table table-dark table-striped table-hover caption-top" style={{ marginTop: 20 }}>
                <caption><h1>8949:</h1></caption>
                <thead>
                    <tr>
                        <th>Acquire Date</th>
                        <th>Sell Date</th>
                        <th>Cost Basis</th>
                        <th>Proceeds</th>
                        <th>Adjustment</th>
                        <th>Capital Gain</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList()}
                    {transactionSums()}
                </tbody>
            </table>
        </div>
    );
}

export default ViewCapitalDifference;


/*

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