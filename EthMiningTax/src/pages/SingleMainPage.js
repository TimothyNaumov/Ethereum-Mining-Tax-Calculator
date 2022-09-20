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

    useEffect(() => {
      return () => {
        console.log("Address has changed");
        if(validAddress){
            ref.current?.scrollIntoView({behavior: 'smooth'});
        }
      }
    }, [validAddress])
    

    return (
      <>
        <NavigationBar/>
        <AddressInputView handleAddressChange={handleAddressChange} handleKeyPress={handleKeyPress}/>
        {validAddress && 
            <div ref={ref}>
                <WalletView address={address} walletTransactions={walletTransactions} balance={balance}/>
            </div>
        }
      </>
     );
}
 
export default MainPage;

/*
{/*<div className="table-wrapper-scoll-y my-custom-scrollbar">}
<table id="dtVerticalScrollExample" className="table table-light table-striped table-hover caption-top" size="sm">
<caption><h1>Wallet Transactions:</h1></caption>
<thead>
    <tr>
        <th>Transaction Hash</th>
        <th>Date and Time</th>
        <th>From</th>
        <th>To</th>
        <th>Value</th>
    </tr>
</thead>
<tbody>{transactionList()}</tbody>
</table>
{/*</div>}
*/

/*<Container fluid="sm" >
            <Row className="justify-content-md-center">
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Link Wallet</h2>
                                <p>You wallet will be used to identify mining income from the moment it was transferred from your mining pool to your wallet. This will be used as your cost basis and determines the capital gain or loss of your assets from the time you recieved your income to the moment you sell Ethereum.</p>
                                <AddressInput/>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Row >
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Upload Exchange Transactions</h2>
                                <p>Download a csv or raw transactions from coinbase and upload it in the upload csv section to calculate your proceeds that capital gain or loss is determined from. Your proceeds will be compared to corresponding income from your mining wallet to determine your capital gain or loss.</p>
                                <UploadCSVBox/>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="p-5 my-4 rounded-3" align="center">
                        <Card>
                            <Card.Body>
                                <h2>Generate Report</h2>
                                <p>After you have linked your mining wallet and uploaded a list of raw transactions you can generate and view your 8949 form. You can use different methods to calculate your capital gain or loss such as FIFO (First In First Out), LIFO (Last In Last Out), and HIFO (Highest In First Out).</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            </Container>
            */