import React from "react";
import {Container, Table, Button } from 'react-bootstrap'

const Transaction = (props) => (
    <tr>
        <td>{props.acquireDate}</td>
        <td>{props.sellDate}</td>
        <td>{parseFloat(props.proceeds).toFixed(2)}</td>
        <td>{parseFloat(props.costBasis).toFixed(2)}</td>
        <td>{props.codes}</td>
        <td>{parseFloat(props.adjustment).toFixed(2)}</td>
        <td>{parseFloat(props.capitalGain).toFixed(2)}</td>
    </tr>
);

const GainLossReportView = (props) => {
    function transactionList(){
        return props.mockData.map((transaction) => {
            return (
                //I feel like there's definitely a better way to be passing in these props with just one object such as...
                //<Transaction props={transaction}/> but that didn't work for me
                <Transaction acquireDate={transaction.acquireDate} sellDate={transaction.sellDate} costBasis={transaction.costBasis} proceeds={transaction.proceeds} adjustment={transaction.adjustment} capitalGain={transaction.capitalGain}/>
            );
        });
    };

    return (
        <div className="align-items-center component-section">
            <Container>
                <div className="p-5 my-4 rounded-5 bg-light" align="left">
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