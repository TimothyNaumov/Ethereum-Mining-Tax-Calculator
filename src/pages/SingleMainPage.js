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
    shouldRenderWallet: false,
    shouldRenderExchangeUpload: false,
    shouldRenderExchangeTransactions: false,
    shouldRenderReport: false,
    exchangeTransactionsUploaded: false,
    address: "",
    balance: {usd: 0, wei: 0},
    walletTransactions: [],
    exchangeTransactions: [],
    CapitalGainLossReport: [],
}

function reducer(state, action){
    console.log(`Dispatching ${action.type}`);
    //DISPATCH TYPES
    //1. EnterDemo
    //2. ResetView
    //3. AddressEntered
    //4. WalletVerified
    //5. ExchangeTransactionsUploaded
    //6. GenerateReport

    switch(action.type){
        case "EnterDemo":
            //On enter demo, change address to TEST and let getWalletInfo fetch demo data
            return {...state, address: "TEST", shouldRenderWallet: true};
        case "ResetView":
            return initialState;
        case "AddressEntered":
            //Set address in state to user wallet address and use getWalletInfo to fetch wallet balance
            //and wallet transactions
            return {...state, address: action.address, shouldRenderWallet: true};
        case "WalletVerified":
            //Set walletVerified to true and update state
            return {...state, shouldRenderExchangeUpload: true};
        case "ExchangeTransactionsUploaded":
            //set ExchangeTransactions to true and update state
            return {...state, exchangeTransactions: true};
        case "GenerateReport":
            //Call function to set CapitalGainLossReport attribute in state to report value
            //Actually, I think the component should handle that, I should just validate to render component
            return {...state, shouldRenderReport: true};
        default:
            throw new Error();
     }
}

function MainPage(){
    //const [address, setAddress] = useState("");
    // const [balance, setBalance] = useState({ eth: 0, usd: 0});
    // const [walletTransactions, setWalletTransactions] = useState([]);
    // const [walletVerified, setWalletVerified] = useState(false);
    // const [CSVUploaded, setCSVUploaded] = useState(false);
    // const [sellTransactions, setSellTransactions] = useState([]);
    // const [generateReport, setGenerateReport] = useState(false);
    // const [report, setReport] = useState();
    // const [inDemo, setInDemo] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const ref = useRef(null);
    //const ADDRESS = inDemo ? "TEST" : address;
    
    // function handleAddressChange(e){
    //     e.preventDefault();
    //     setAddress(e.target.value);
    // }

    // function resetView(){
    //     setAddress("");
    //     setBalance({ eth: 0, usd: 0});
    //     setWalletTransactions([]);
    // }

    // async function handleKeyPress(target){
    //     if(target.charCode === 13){
    //         getWalletInfo();
    //     }
    // }

    async function getWalletInfo(){
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

    useEffect(() => {
        getWalletInfo();
        //eslint-disable-next-line
    }, [state.address])
    

    // useEffect(() => {
    //     ref.current?.scrollIntoView({behavior: 'smooth'});
    // }, [balance, walletVerified, CSVUploaded, generateReport])

    // useEffect(() => {
    //     getWalletInfo();
    //     //eslint-disable-next-line
    // }, [inDemo])
    
    return (
      <>
        <NavigationBar/>
        <AddressInputView dispatch={dispatch}/>
        {state.shouldRenderWallet && 
            <div ref={ref}>
                <WalletView dispatch={dispatch} state={state}/>
            </div>
        }
        {/*walletVerified && 
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
        } */}
      </>
     );
}
 
export default MainPage;

//setDemoValues={setDemoValues}