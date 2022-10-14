import React from "react";
import {Container, Table} from 'react-bootstrap'
import { get8949 } from "../../CapitalGainLossCalculator";

const Transaction = (props) => {
    let acqDate = new Date(props.transaction.AcquireDate).toLocaleDateString();
    let sellDate = new Date(props.transaction.SellDate).toLocaleDateString();
    return(
    <tr>
        <td>{acqDate}</td>
        <td>{sellDate}</td>
        <td>{parseFloat(props.transaction.Proceeds).toFixed(2)}</td>
        <td>{parseFloat(props.transaction.CostBasis).toFixed(2)}</td>
        <td>{props.transaction.codes}</td>
        <td>{parseFloat(props.transaction.Adjustment).toFixed(2)}</td>
        <td>{parseFloat(props.transaction.CapitalGainLoss).toFixed(2)}</td>
    </tr>
    );
};

const GainLossReportView = (props) => {
    function transactionList(){
        const report = get8949(props.walletTransactions, props.exchangeTransactions);
        return report.map((transaction) => {
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