import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import '../App.css';
import WalletView from '../Components/SinglePageViews/WalletView';
import AddressInputView from '../Components/SinglePageViews/AddressInputView';
import NavigationBar from "../Components/NavigationBar";

function MainPage(){
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState({ eth: 0, usd: 0});
    const [walletTransactions, setWalletTransactions] = useState([]);
    const [walletVerified, setWalletVerified] = useState(false);

    const ref = useRef(null);

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
            try{
                const walletTransactionResponse = await axios.get(`http://localhost:4000/wallet/transactions/${address}`);
                const importedWalletTransactions = walletTransactionResponse.data;
                setWalletTransactions(importedWalletTransactions);
            } catch(err){
                console.log(err);
            }
            
            try{
                const walletBalance = await axios.get(`http://localhost:4000/wallet/balance/${address}`);
                const balance = walletBalance.data;
                setBalance(balance);
            } catch(err){
                console.log(err);
            }
        }
    }

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }, [balance, walletVerified])
    

    return (
      <>
        <NavigationBar/>
        <AddressInputView handleAddressChange={handleAddressChange} handleKeyPress={handleKeyPress}/>
        {balance.usd && 
            <div ref={ref}>
                <WalletView address={address} walletTransactions={walletTransactions} balance={balance} setWalletVerified={setWalletVerified} resetView={resetView}/>
            </div>
        }
        {walletVerified && 
            <div ref={ref}>
                <h1>You are ready to submit your exchange transactions!</h1>
            </div>
        }
        
      </>
     );
}
 
export default MainPage;