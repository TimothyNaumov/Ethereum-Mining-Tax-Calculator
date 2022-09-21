import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import '../App.css';
import WalletView from '../Components/SinglePageViews/WalletView';
import AddressInputView from '../Components/SinglePageViews/AddressInputView';
import NavigationBar from "../Components/NavigationBar";

function MainPage(){
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(0);
    const [walletTransactions, setWalletTransactions] = useState([]);

    const [validAddress, setValidAddress] = useState(false);

    const ref = useRef(null);

    function handleAddressChange(e){
        e.preventDefault();
        setAddress(e.target.value);
    }

    function handleKeyPress(target){
        if(target.charCode === 13){
            //alert(`You tried to submit your adress as ${address}`);
            console.log("Changing address");
            setValidAddress(true);
            ref.current?.scrollIntoView({behavior: 'smooth'});
            
            axios.get(`http://localhost:4000/wallet/balance/${address}`)
            .then(res => {
                const balance = res.data;
                setBalance(balance);
            })

            axios.get(`http://localhost:4000/wallet/transactions/${address}`)
            .then(res => {
                const importedWalletTransactions = res.data;
                setWalletTransactions(importedWalletTransactions);
            })
            
            //ref.current?.scrollIntoView({behavior: 'smooth'});
        }
    }
    /*
    useEffect(() => {
      return () => {
        console.log("Address has changed");
        if(validAddress){
            ref.current?.scrollIntoView({behavior: 'smooth'});
        }
      }
    }, [validAddress])
    */
    

    return (
      <>
        <NavigationBar/>
        <AddressInputView handleAddressChange={handleAddressChange} handleKeyPress={handleKeyPress}/>
        {address !== "" && 
            <div ref={ref}>
                <WalletView address={address} walletTransactions={walletTransactions} balance={balance}/>
            </div>
        }
      </>
     );
}
 
export default MainPage;