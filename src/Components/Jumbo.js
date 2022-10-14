import React from 'react'
import Typed from 'react-typed';
import NextButton from './NextButton';

const Jumbo = () => {
  return (
    <div className='jumbo-wrapper'>
        <div className='jumbo-info'>
            <h1>Ethereum Mining Tools</h1>
            <Typed
                className='typed-text'
                strings={["Taxes", "Wallet Lookup", "Transaction Lookup"]}
                typeSpeed={30}
                backSpeed={40}
                loop
            />
            <NextButton to="/linkwallet" text="Click here to get started" className='main-page-button'></NextButton>
        </div>
    </div>
  )
}

export default Jumbo