import React, { useState, useRef, useEffect, useReducer } from "react";
import axios from 'axios';
import '../App.css';
import WalletView from '../Components/SinglePageViews/WalletView';
import AddressInputView from '../Components/SinglePageViews/AddressInputView';
import NavigationBar from "../Components/NavigationBar";
import ExchangeImportView from "../Components/SinglePageViews/ExchangeImportView";
import SellTransactionView from "../Components/SinglePageViews/SellTransactionView";
import GainLossReport from "../Components/SinglePageViews/GainLossReportView";
import reportData from "../Testing/MockReportValues";

const initialState = {
    walletVerified: false,
    exchangeTransactionsUploaded: false,
    shouldRenderReport: false,
    address: "",
    balance: { eth: 0, usd: 0},
    walletTransactions: [],
    exchangeTransactions: [],
    CapitalGainLossReport: [],
}

async function reducer(state, action){
    console.log(`Dispatching ${action}`);
    //DISPATCH TYPES
    //1. EnterDemo
    //2. AddressEntered
    //3. WalletVerified
    //4. ExchangeTransactionsUploaded
    //5. GenerateReport

    switch(action.type){
        case "EnterDemo":
            //On enter demo, change address to TEST and let getWalletInfo fetch demo data
            state.address = "TEST";
            await getWalletInfo(state);
            return {...state};
        case "AddressEntered":
            //Set address in state to user wallet address and use getWalletInfo to fetch wallet balance
            //and wallet transactions
            state.address(action.address);
            await getWalletInfo(state);
            return {...state};
        case "WalletVerified":
            //Set walletVerified to true and update state
            state.walletVerified = true;
            return {...state};
        case "ExchangeTransactionsUploaded":
            //set ExchangeTransactions to true and update state
            state.exchangeTransactionsUploaded = true;
            return {...state};
        case "GenerateReport":
            //Call function to set CapitalGainLossReport attribute in state to report value
            //Actually, I think the component should handle that, I should just validate to render component
            state.shouldRenderReport = true;
            return {...state};
    }
}

async function getWalletInfo(state){
    try{
        const walletTransactionResponse = await axios.get(`http://localhost:4000/wallet/transactions/${state.address}`);
        const importedWalletTransactions = walletTransactionResponse.data;
        state.walletTransactions = importedWalletTransactions;
    } catch(err){
        console.log(err);
    }
    try{
        const walletBalance = await axios.get(`http://localhost:4000/wallet/balance/${state.address}`);
        const balance = walletBalance.data;
        state.balance = balance;
    } catch(err){
        console.log(err);
    }
}

function MainPage(){
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState({ eth: 0, usd: 0});
    const [walletTransactions, setWalletTransactions] = useState([]);
    const [walletVerified, setWalletVerified] = useState(false);
    const [CSVUploaded, setCSVUploaded] = useState(false);
    const [sellTransactions, setSellTransactions] = useState([]);
    const [generateReport, setGenerateReport] = useState(false);
    const [report, setReport] = useState();
    const [inDemo, setInDemo] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const ref = useRef(null);
    const ADDRESS = inDemo ? "TEST" : address;
    
    function handleAddressChange(e){
        e.preventDefault();
        setAddress(e.target.value);
    }

    function resetView(){
        setAddress("");
        setBalance({ eth: 0, usd: 0});
        setWalletTransactions([]);
    }

    async function handleKeyPress(target){
        if(target.charCode === 13){
            getWalletInfo();
        }
    }

    

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }, [balance, walletVerified, CSVUploaded, generateReport])

    useEffect(() => {
        getWalletInfo();
        //eslint-disable-next-line
    }, [inDemo])
    
    return (
      <>
        <NavigationBar/>
        <AddressInputView dispatch={dispatch}/>
        {!!state.balance.usd && 
            <div ref={ref}>
                <WalletView address={ADDRESS} walletTransactions={walletTransactions} balance={balance} setWalletVerified={setWalletVerified} resetView={resetView}/>
            </div>
        }
        {walletVerified && 
            <div ref={ref}>
                <ExchangeImportView setCSVUploaded={setCSVUploaded} setSellTransactions={setSellTransactions} inDemo={inDemo}/>
            </div>
        }
        {
            CSVUploaded && 
            <div ref={ref}>
                <SellTransactionView sellTransactions={sellTransactions} setGenerateReport={setGenerateReport}/>
            </div>
        }
        {
            generateReport &&
            <div ref={ref}>
                <GainLossReport walletTransactions={walletTransactions} exchangeTransactions={sellTransactions} mockData={reportData} setReport={setReport}/>
            </div>
        }
      </>
     );
}
 
export default MainPage;

//setDemoValues={setDemoValues}