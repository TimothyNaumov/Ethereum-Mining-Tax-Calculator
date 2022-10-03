import React from 'react'
import { Container } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar';

/*
    Why does a React.Fragment break my css styling as properties like height are overrideen
*/


const LinkWalletHelp = () => {
  return (
    <div>
        <NavigationBar/>
        <Container>
            <div className='bg-light'>
                <h1 style={{fontSize: "75px"}}>How to link your Ethereum Wallet</h1>
            </div>
        </Container>
    </div>
  );
}

export default LinkWalletHelp