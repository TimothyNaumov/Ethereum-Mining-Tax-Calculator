export const get8949 = (incomeTransactions, exchangeTransactions) => {
    const cleanIncomeTransactions = getCleanIncomeTransactions(incomeTransactions);
    const cleanExchangeTransactions = getCleanExchangeTransactions(exchangeTransactions);
    const report = generateGainLossTransactions(cleanIncomeTransactions, cleanExchangeTransactions);
    return report;
};

export const getColumnTotals = (reportRows) => {
    let columnTotals = {
        totalProceeds: 0,
        totalCostBasis: 0,
        totalAdjustment: 0,
        totalGainLoss: 0
    }

    console.log(reportRows);

    reportRows.forEach(row => {
        columnTotals.totalProceeds += parseInt(row.Proceeds);
        columnTotals.totalCostBasis += parseInt(row.CostBasis);
        columnTotals.totalAdjustment += parseInt(row.Adjustment);
        columnTotals.totalGainLoss += parseInt(row.CapitalGainLoss);
    });

    return columnTotals;
}

function toEther(wei){
    return  wei / Math.pow(10, 18);
}

const getCleanIncomeTransactions = (incomeTransactions) => {
    
    return incomeTransactions.filter(transaction => (transaction.from === "0x750ca59270bdf16507ff977037a49a8cfb6f98b9" || transaction.from === "Mining Pool Wallet") && transaction.value !== 0).map(transaction => (
        {
            epoch: transaction.timeStamp,
            isoDate: new Date(transaction.timeStamp * 1000),
            incomeInUSD: toEther(transaction.value) * transaction.usd,
            ether: toEther(transaction.value),
            etherPriceOnIncomeDate: transaction.usd,
            TransactionFeeQuantity: toEther(transaction.gasPrice * transaction.gasUsed),
            TransactionFeePrice: toEther(transaction.gasPrice * transaction.gasUsed) * transaction.usd
        }
    ));
}

const getCleanExchangeTransactions = (exchangeTransactions) => {
    
    
    return exchangeTransactions.map(element => (
        {
            Date: element["Date & time"],
            Proceeds: element["Proceeds (excl. fees paid) (USD)"],
            QuantityDisposed: element["Quantity Disposed"],
        }
    ));
    
    
}

const generateGainLossTransactions = function(costBasis, sellingTransactions){
    let capitalGainLossReport = [];
    //starting from the first income transaction
    let basisIndex = 0;
    //creating copy of sell transaction as to not modify the original global exchange transactions
    //let costBasisTransactions = [...costBasis];
    let costBasisTransactions = JSON.parse(JSON.stringify(costBasis));
    for(var i = 0; i < sellingTransactions.length; i++){
        let sellTransaction = sellingTransactions[i];
        let remainingEthSold = sellTransaction.QuantityDisposed;
        let iterations = 0
        while(remainingEthSold > 0 && iterations < 100){
            iterations++;
            let costBasisTransaction = costBasisTransactions[basisIndex];
            let acqDate = new Date(costBasisTransaction.epoch * 1000).toString();
            let currentReportTransaction = {
                AcquireDate: acqDate,
                SellDate: sellTransaction.Date
            };
            let currentEthereumSold = remainingEthSold;
            let shouldMoveToNextCostBasis = false;
            let proceeds = (remainingEthSold / sellTransaction.QuantityDisposed) * sellTransaction.Proceeds;
            let adjustment = (remainingEthSold / costBasisTransaction.ether) * costBasisTransaction.TransactionFeePrice;
            if(costBasisTransaction.ether < remainingEthSold){
                //Lack of quantity in income transaction requires overflow
                remainingEthSold -= costBasisTransaction.ether;
                currentEthereumSold = costBasisTransaction.ether;
                currentReportTransaction.QuantityDepletedFromCostBasis = currentEthereumSold;
                proceeds = (costBasisTransaction.ether / sellTransaction.QuantityDisposed) * sellTransaction.Proceeds;
                adjustment = costBasisTransaction.TransactionFeePrice;
                costBasisTransaction.TransactionFeePrice = 0;
                shouldMoveToNextCostBasis = true;
            } else {
                //cost basis transaction has enough quantity to cover sell transaction
                costBasisTransaction.ether -= remainingEthSold;
                costBasisTransaction.TransactionFeePrice -= adjustment;
                //calculating a proportion of amount sold vs amount in cost basis to determine how much of the cost basis transactions fee can be used as an adjustment
                //transactionFee = (remainingEthSold / costBasisTransaction.ether) * costBasisTransaction.TransactionFeePrice;
                currentReportTransaction.QuantityLeftInBasis = costBasisTransaction.ether;
                costBasisTransaction.incomeInUSD -= remainingEthSold * costBasisTransaction.etherPriceOnIncomeDate;
                remainingEthSold = 0;  
            }

            let costBasisValue = costBasisTransaction.etherPriceOnIncomeDate * currentEthereumSold;
            currentReportTransaction.CostBasis = costBasisValue.toFixed(2);

            currentReportTransaction.Proceeds = proceeds.toFixed(2);

            let capitalGainLoss = proceeds - costBasisValue;
            currentReportTransaction.CapitalGainLoss = capitalGainLoss.toFixed(2);

            currentReportTransaction.Adjustment = adjustment;

            //console.log(`Iterations: ${iterations} \n costBasis was ${costBasisValue} with current ethereum split of ${currentEthereumSold}. There is ${remainingEthSold} ethereum remaining to parse`)

            capitalGainLossReport.push(currentReportTransaction);

            if(shouldMoveToNextCostBasis){
                basisIndex++;
            }
        }
    }

    return capitalGainLossReport;
}

export default generateGainLossTransactions;