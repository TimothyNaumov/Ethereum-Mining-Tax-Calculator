import React, {useContext, useEffect, useState} from "react";
import { TransactionsContext } from "../TransactionsContext";
import generateGainLossTransactions from '../TaxGenerator';

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

    function noWalletTransactions(){
        return (
            <h1>No wallet Transactions have been found</h1>
        )
    }

    function noExchangeTransactions(){
        return (
            <h1>No exchange Transactions have been found</h1>
        )
    }

    function renderReport(){
        return(
            <div>
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

    
    return(
        renderReport()
    );
}

export default ViewCapitalDifference;