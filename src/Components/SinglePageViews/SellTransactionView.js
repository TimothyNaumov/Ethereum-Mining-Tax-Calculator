import React from "react";
import {Container, Table, Button } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons';

const Transaction = (props) => (
    <tr>
        <td>{props.sellingDate}</td>
        <td>{parseFloat(props.proceedsUSD).toFixed(2)}</td>
        <td>{parseFloat(props.proceedsETH).toFixed(5)}</td>
    </tr>
);

const sellTransactionView = (props) => {
    

    function transactionList(){
        return props.sellTransactions.map((transaction) => {
            return (
                //I feel like there's definitely a better way to be passing in these props with just one object such as...
                //<Transaction props={transaction}/> but that didn't work for me
                <Transaction sellingDate={transaction.sellingDate} proceedsUSD={transaction.proceedsUSD} proceedsETH={transaction.proceedsETH}/>
            );
        });
    };

    function generateReport(){
        props.setGenerateReport(true);
    }

    return (
        <div className="align-items-center component-section">
            <Container>
                <div className="p-5 my-4 rounded-5 bg-light" align="left">
                    <h1>Uploaded Selling Transactions:</h1>
                    <div className='table-wrapper-scroll-y my-custom-scrollbar table-striped table-hover'>
                        <Table responsive size='sm'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Proceeds (USD)</th>
                                    <th>Proceeds (ETH)</th>
                                </tr>
                            </thead>
                        <tbody>{transactionList()}</tbody>
                        </Table>
                    </div>
                    <div className="align-items-center confirmation-container">
                        <div className="confirmationtextElement">
                            <Button variant="outline-success" size="lg" onClick={generateReport}>
                                <h2>Generate Capital Gain/Loss Report</h2>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default sellTransactionView