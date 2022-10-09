import React, { useState } from 'react';
import Papa from 'papaparse';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons';
import { mockExchangeTransactions } from '../../Testing/MockReportValues';

const UploadCSV = (props) => {
    const [file, setFile] = useState();
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [values, setValues] = useState([]);
    const [sellValueUSD, setSellValueUSD] = useState([]);

    function onChange(e){
        setFile(e.target.files[0]);
    }

    function onSubmit(e){
        console.log("Trying to submit. Are we in demo? " + props.inDemo);
        if(props.inDemo){
            props.setSellTransactions(mockExchangeTransactions);
            props.setCSVUploaded(true);
            return;
        }

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results){
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
                            proceedsUSD: proceeds,
                            proceedsETH: quantityDisposed
                        };
                        sellingTransactions.push(sellTransaction);
                    }
                });

                setParsedData(results.data);

                setTableRows(rowsArray[0]);

                setValues(valuesArray);

                setSellValueUSD(sellingTransactions);

                props.setSellTransactions(sellingTransactions);
            },
        });
        props.setCSVUploaded(true);
    };



    return ( 
        <div className="d-flex align-items-center component-section">
            <Container>
                <Row className="justify-content-md-center" align="center">
                    <h1>Upload Exchange Transactions</h1>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <p className="lead">Your capital gain/loss is determined from the Ethereum you sell. Upload a csv of your coinbase transactions to add your selling transactions. For more information click <a href ="/help" target="_blank">here</a></p>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <Form.Group className="mb-3">
                        <Form.Control type="file" className='form-control' id="csvFileInput" size="lg" accept={".csv"} onChange={onChange} />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center" align="center">
                    <Button size="lg" variant="outline-primary" style={{width: "60px", height: "60px"}} className="rounded-circle" onClick={onSubmit}>
                        <ArrowDown/>
                    </Button>
                </Row>
            </Container>
        </div>
     );
}

export default UploadCSV;

//<input className="form-control" type="file" id="csvFileInput" accept={".csv"} onChange={onChange}></input>