const generateGainLossTransactions = function(costBasis, sellingTransactions){
    //console.log(`${JSON.stringify(costBasis, null, 2)} and ${JSON.stringify(sellingTransactions, null, 2)}`);
    //console.log(`${JSON.stringify(costBasis[0], null, 2)} and ${JSON.stringify(sellingTransactions[0], null, 2)}`);

    let capitalGainLossReport = [];

    let basisIndex = 0;
    let costBasisTransactions = {...costBasis};
    //console.log("before hifo it is " + JSON.stringify(costBasisTransactions, null, 2))
    let sellIndex = 0;
    //let costBasisTransaction = costBasis[basisIndex]

    for(var i = 0; i < sellingTransactions.length; i++){
        let sellTransaction = sellingTransactions[i];
        let remainingEthSold = sellTransaction.QuantityDisposed;
        let iterations = 0
        while(remainingEthSold > 0 && iterations < 10){
            let costBasisTransaction = costBasisTransactions[basisIndex];
            let acqDate = new Date(costBasisTransaction.epoch * 1000).toString();
            let currentReportTransaction = {
                AcquireDate: acqDate,
                SellDate: sellTransaction.Date
            };
            iterations++;
            let currentEthereumSold = remainingEthSold;
            let shouldMoveToNextCostBasis = false;
            let proceeds = (remainingEthSold / sellTransaction.QuantityDisposed) * sellTransaction.Proceeds;

            if(costBasisTransaction.ether < remainingEthSold){
                remainingEthSold -= costBasisTransaction.ether;
                currentEthereumSold = costBasisTransaction.ether;
                proceeds = (costBasisTransaction.ether / sellTransaction.QuantityDisposed) * sellTransaction.Proceeds;
                shouldMoveToNextCostBasis = true;
            } else {
                costBasisTransaction.ether -= remainingEthSold;
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
                //costBasisTransactions[basisIndex].Exhausted = true;
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
    //console.log(`calculated capital gain as ${capitalGain}`);


    /*

    const hifo = function(cbTransactions){
        let tempTransactions = cbTransactions;

        for(var i = 0; i < tempTransactions.length; i++){
            let currentHighest = tempTransactions[i];
            for(var j = i + 1; j < tempTransactions.length; j++){
                let currentTransaction = tempTransactions[j]
                if(currentTransaction.ether > currentHighest.ether){
                    swap(tempTransactions, i, j);
                }
            }
        }

        return tempTransactions;
    }

    const swap = function(arr, i, j){
        let tempI = arr[i];
        arr[i] = arr[j];
        arr[j] = tempI;
    }

    costBasisTransactions = hifo(costBasisTransactions);

    console.log("hifo should be " + JSON.stringify(costBasisTransactions, null, 2));
    sellingTransactions.forEach(element => {
        
        console.log(element.Proceeds);
        let sellProceeds = element.Proceeds;
        while(sellProceeds > 0){
            let difference = costBasis[basisIndex].value - sellProceeds;
            if(difference < 0){
                sellProceeds =  difference * -1;
                basisIndex++;
            } else {
                console.log(`Selling transactions ${element} is being subtracted from ${costBasis[basisIndex]}`)
                costBasis[basisIndex].value -= sellProceeds
                sellProceeds = 0;
                console.log(`Selling transactions ${element} has been subtracted and costBasis has become ${costBasis[basisIndex]}`)
            }
        }
    });

    
        iterations++;
        let currentReportTransaction = {
            AcquireDate: costBasisTransaction.epoch,
            SellDate: sellTransaction.Date
        };

        //let amountSoldInEth = sellTransaction.QuantityDisposed;
        let tempEthSold = ethSold;
        let sellProceeds = sellTransaction.Proceeds;
        let differenceInEth = costBasisTransaction.ether - tempEthSold;
    
        //console.log(`${sellTransaction.QuantityDisposed} was sold for ${sellProceeds} USD on ${sellTransaction.Date}`); 
        //console.log(`${ethSold} was sold on ${sellTransaction.Date}`)
        //console.log(`The first income transactions for 2021 was ${costBasisTransaction.incomeInUSD} USD which was ${costBasisTransaction.ether} with Ethereum priced at ${costBasisTransaction.etherPriceOnIncomeDate}`)
        //console.log(`Taking from the corresponding income transaction we have a difference of ${differenceInEth}`);
    
        
        if(differenceInEth < 0){
            tempEthSold = costBasisTransaction.ether;
            let proportionalAmountSoldInEth = ethSold / sellTransaction.QuantityDisposed
            sellProceeds *= costBasisTransaction / ;
            sellTransactionValue = differenceInEth * -1;
            console.log(`We have detected an overflow where the amountSold has been seperated to just process ${amountSoldInEth} and the remaining value to process is now ${sellTransactionValue}`)
        } else {
            sellTransactionValue = 0;
        }

        currentReportTransaction.Proceeds = sellProceeds; 

        //console.log(`The price of ${amountSoldInEth} Eth which was sold for ${sellProceeds} USD was worth ${amountSoldInEth * costBasisTransaction.etherPriceOnIncomeDate} when it was recieved from mining pool. Eth was worth ${costBasisTransaction.etherPriceOnIncomeDate} and you sold ${amountSoldInEth}`);
        currentReportTransaction.CostBasis = (amountSoldInEth * costBasisTransaction.etherPriceOnIncomeDate).toFixed(2);
    
        let capitalGain = sellProceeds - (amountSoldInEth * costBasisTransaction.etherPriceOnIncomeDate);
        //console.log(`The price of Ethereum went from ${costBasisTransaction.etherPriceOnIncomeDate} USD to ${sellTransaction.EtherPriceOnSellDate} USD`);
        //console.log(`Therefore the Capital gain can be calculated as ${sellProceeds} USD - ${(amountSoldInEth * costBasisTransaction.etherPriceOnIncomeDate)} = ${capitalGain} (FIFO)`);
        currentReportTransaction.CapitalGainLoss = capitalGain.toFixed(2);
        capitalGainLossReport.push(currentReportTransaction);
    */
}

export default generateGainLossTransactions;