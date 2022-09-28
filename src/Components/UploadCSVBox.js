import React, { useState, useContext } from 'react';
import Papa from 'papaparse';
//import { TransactionsContext } from '../TransactionsContext';

function UploadCSV() {
    const [file, setFile] = useState();
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [values, setValues] = useState([]);
    const [sellValueUSD, setSellValueUSD] = useState([]);
    //const {transactions, setTransactions} = useContext(TransactionsContext);

    function onChange(e){
        setFile(e.target.files[0]);
    }

    function onSubmit(e){
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results){
                //console.log(results.data)
                const rowsArray = [];
                const valuesArray = [];
                const sellingTransactions = [];

                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                    const transactionType = Object.values(d)[1];
                    if(transactionType === 'Sell'){
                        const transactionDate = Object.values(d)[2];
                        const quantityDisposed = Object.values(d)[8];
                         const proceeds = Object.values(d)[9]
                        console.log(`transaction type is ${transactionType} with selling values of ${quantityDisposed} worth ${proceeds} USD`);
                        const sellTransaction = {
                            sellingDate: transactionDate,
                            proceedsUSD: proceeds
                        };
                        sellingTransactions.push(sellTransaction);
                    }
                });

                setParsedData(results.data);
                //console.log("Trying to access globalTransactions in csv upload with: " + JSON.stringify(transactions, null, 2));
                //let currentGlobalState = transactions;
                //currentGlobalState.exchangeTransactions = results.data;
                //currentGlobalState.exchangeTransactions = results.data;
                //console.log("Trying to set globalTransactions in csv upload with: " + JSON.stringify(currentGlobalState, null, 2));
                //setTransactions(currentGlobalState);

                setTableRows(rowsArray[0]);

                setValues(valuesArray);

                setSellValueUSD(sellingTransactions);
            },
        });
        /*
        var formdata = new FormData();
        formdata.append("transactions", file);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        
        fetch("http://localhost:7000/upload-csv", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        */
    };



    return ( 
        <div>
            <label htmlFor="formFile" className="form-label">Upload CSV of selling transactions from Coinbase</label>
            <div>
                <div className='row'>
                    <div className='col'>
                        <input className="form-control" type="file" id="csvFileInput" accept={".csv"} onChange={onChange}></input>
                    </div>
                    <div className='col'>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>Upload</button>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default UploadCSV;