import React, {useContext, useState} from "react";

const BalanceContext = React.createContext()
const BalanceUpdateContext = React.createContext()

export function useBalance(){
  return useContext(BalanceContext)
}

export function useBalanceUpdate(){
  return useContext(BalanceUpdateContext)
}

export function BalanceProvider({children}){
  const [balance, setBalance] = useState(420)

  function updateBalance(newBalance){
    //console.log(`Balance is trying to update to ${balance}`)
    //setBalance(newbal => 69)
    setBalance(newBalance)
  }

  return (
    <BalanceContext.Provider value={balance}>
      <BalanceUpdateContext.Provider value={updateBalance}>
        {children}
      </BalanceUpdateContext.Provider>
    </BalanceContext.Provider>
  )
}

// set the defaults
/*
const BalanceContext = React.createContext({
  balance: 0,
  setBalance: () => {}
});
*/

export default BalanceContext;
