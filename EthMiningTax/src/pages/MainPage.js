import NextButton from "../Components/NextButton";
import NavigationBar from "../Components/NavigationBar";
import Jumbo from "../Components/Jumbo";
import React from "react";
function MainPage(){
    return ( 
      <>

        <NavigationBar/>
        <Jumbo/>
      </>
     );
}
 
export default MainPage;

/*<div className='p-5 text-center bg-image' style={{ backgroundColor: "#45728c", height:"100%", width: "100%"}}>
          <div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-white'>
                <h1 className='mb-3'>Ethereum Mining Capital Gain/Loss Calculator</h1>
                  <NextButton destination="/linkWallet" text="Click to link wallet"/>
              </div>
            </div>
          </div>
        </div> 
        */