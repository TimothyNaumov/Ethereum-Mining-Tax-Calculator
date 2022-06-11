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
            if(costBasisTransaction.ether < remainingEthSold){
                //Lack of quantity in income transaction requires overflow
                remainingEthSold -= costBasisTransaction.ether;
                currentEthereumSold = costBasisTransaction.ether;
                currentReportTransaction.QuantityDepletedFromCostBasis = currentEthereumSold;
                proceeds = (costBasisTransaction.ether / sellTransaction.QuantityDisposed) * sellTransaction.Proceeds;
                shouldMoveToNextCostBasis = true;
            } else {
                //cost basis transaction has enough quantity to cover sell transaction
                costBasisTransaction.ether -= remainingEthSold;
                currentReportTransaction.QuantityLeftInBasis = costBasisTransaction.ether;
                costBasisTransaction.incomeInUSD -= remainingEthSold * costBasisTransaction.etherPriceOnIncomeDate;
                remainingEthSold = 0;
            }

            let costBasisValue = costBasisTransaction.etherPriceOnIncomeDate * currentEthereumSold;
            currentReportTransaction.CostBasis = costBasisValue.toFixed(2);

            currentReportTransaction.Proceeds = proceeds.toFixed(2);

            let capitalGainLoss = proceeds - costBasisValue;
            currentReportTransaction.CapitalGainLoss = capitalGainLoss.toFixed(2);

            console.log(`Iterations: ${iterations} \n costBasis was ${costBasisValue} with current ethereum split of ${currentEthereumSold}. There is ${remainingEthSold} ethereum remaining to parse`)

            capitalGainLossReport.push(currentReportTransaction);

            if(shouldMoveToNextCostBasis){
                basisIndex++;
            }
        }
    }

    const initialValue = 0;
    const sumWithInital = capitalGainLossReport.reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue.CapitalGainLoss),
        initialValue
    );

    console.log("Calculated Sum of Proceeds is " + sumWithInital);

    return capitalGainLossReport;
}

export default generateGainLossTransactions;