import React from "react";
import {Container, Table, Button } from 'react-bootstrap'

const Transaction = (props) => (
    <tr>
        <td>{props.transaction.acquireDate}</td>
        <td>{props.transaction.sellDate}</td>
        <td>{parseFloat(props.transaction.proceeds).toFixed(2)}</td>
        <td>{parseFloat(props.transaction.costBasis).toFixed(2)}</td>
        <td>{props.transaction.codes}</td>
        <td>{parseFloat(props.transaction.adjustment).toFixed(2)}</td>
        <td>{parseFloat(props.transaction.capitalGain).toFixed(2)}</td>
    </tr>
);

const GainLossReportView = (props) => {
    function transactionList(){
        return props.mockData.map((transaction) => {
            return (
                <Transaction transaction={transaction}/>
            );
        });
    };

    return (
        <div className="align-items-center component-section">
            <Container>
                <div className="p-5 my-4 rounded-5 bg-light info-table" align="left">
                    <h1>8949: Sales and Other Dispositions of Capital Assets</h1>
                    <div className='table-wrapper-scroll-y my-custom-scrollbar table-striped table-hover'>
                        <Table responsive size='sm'>
                            <thead>
                                <tr>
                                    <th>(b) Date acquired (Mo., day, yr.)</th>
                                    <th>(c) Date sold or disposed of (Mo., day, yr.)</th>
                                    <th>(d) Proceeds (sales price)</th>
                                    <th>(e) Cost or other basis</th>
                                    <th>(f) Code(s) from instructions</th>
                                    <th>(g) Amount of adjustment</th>
                                    <th>(h) Gain or (loss)</th>
                                </tr>
                            </thead>
                        <tbody>{transactionList()}</tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GainLossReportView