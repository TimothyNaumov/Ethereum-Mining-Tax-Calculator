import React, {useRef, useEffect, useReducer } from "react";
import axios from 'axios';
import '../App.css';
import WalletView from '../Components/SinglePageViews/WalletView';
import AddressInputView from '../Components/SinglePageViews/AddressInputView';
import NavigationBar from "../Components/NavigationBar";
import ExchangeImportView from "../Components/SinglePageViews/ExchangeImportView";
import SellTransactionView from "../Components/SinglePageViews/SellTransactionView";
import GainLossReport from "../Components/SinglePageViews/GainLossReportView";

const PROD = true;

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
            return {...state, address: "TEST"};
        case "WalletInfoUpdated":
            return {...state, walletTransactions: action.payload.transactions, balance: action.payload.balance, shouldRenderWallet: true}
        case "ResetView":
            return initialState;
        case "AddressEntered":
            //Set address in state to user wallet address and use getWalletInfo to fetch wallet balance
            //and wallet transactions
            return {...state, address: action.address};
        case "WalletVerified":
            //Set walletVerified to true and update state
            return {...state, shouldRenderExchangeUpload: true};
        case "ExchangeTransactionsUploaded":
            //set ExchangeTransactions to true and update state
            return {...state, exchangeTransactions: action.exchangeTransactions, shouldRenderExchangeTransactions: true};
        case "GenerateReport":
            //Call function to set CapitalGainLossReport attribute in state to report value
            //Actually, I think the component should handle that, I should just validate to render component
            return {...state, shouldRenderReport: true};
        default:
            throw new Error();
     }
}

function MainPage(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const ref = useRef(null);

    useEffect(() => {
        console.log("Change detected in address");

        const getWalletInfo = async () => {
            let domain = PROD ? 'http://www.ethminingtax.com' : 'http://localhost:4000';
            Promise.all([
                axios.get(`${domain}/wallet/transactions/${state.address}`),
                axios.get(`${domain}/wallet/balance/${state.address}`)
            ]).then(([transactionResponse, balanceResponse]) => {
                dispatch({
                    type: "WalletInfoUpdated",
                    payload: {
                        transactions: transactionResponse.data,
                        balance: balanceResponse.data
                    }
                })
            });
        }
        getWalletInfo();
        //eslint-disable-next-line
    }, [state.address])

     useEffect(() => {
         ref.current?.scrollIntoView({behavior: 'smooth'});
    }, [state.shouldRenderWallet, state.shouldRenderExchangeUpload, state.shouldRenderExchangeTransactions, state.shouldRenderReport])
    
    return (
      <>
        <AddressInputView dispatch={dispatch}/>
        { state.shouldRenderWallet && 
            <div ref={ref}>
                <WalletView dispatch={dispatch} state={state}/>
            </div>
        }
        { state.shouldRenderExchangeUpload && 
            <div ref={ref}>
                <ExchangeImportView state={state} dispatch={dispatch}/>
            </div>
        }
        { state.shouldRenderExchangeTransactions && 
            <div ref={ref}>
                <SellTransactionView state={state} dispatch={dispatch}/>
            </div>
        }
        { state.shouldRenderReport &&
            <div ref={ref}>
                <GainLossReport state={state}/>
            </div>
        }
      </>
     );
}
 
export default MainPage;