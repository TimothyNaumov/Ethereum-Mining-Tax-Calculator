import React, {useContext, useState} from 'react';

const AddressContext = React.createContext();
const AddressUpdateContext = React.createContext();

export function useAddress(){
    return useContext(AddressContext);
}

export function useAddressUpdate(){
    return useContext(AddressUpdateContext);
}

export function AddressProvider({children}){
    const [address, setAddress] = useState("")

    function updateAddress(newAddress){
        console.log("Setting address to: " + newAddress);
        setAddress(newAddress);
    }

    return (
        <AddressContext.Provider value={address}>
            <AddressUpdateContext.Provider value={updateAddress}>
                {children}
            </AddressUpdateContext.Provider>
        </AddressContext.Provider>
    )
}

export default AddressContext;