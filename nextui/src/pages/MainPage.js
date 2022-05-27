import ToWalletLinkButton from "../Components/ToWalletLinkButton";
const MainPage = () => {
    return ( 
        <div className='p-5 text-center bg-image' style={{ backgroundColor: "#45728c", height:"100%", width: "100%"}}>
        <div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-white'>
              <h1 className='mb-3'>Ethereum Mining Capital Gain/Loss Calculator</h1>
              <h4 className='mb-3'>All you need is an public Ethereum Wallet Address and a csv of selling transactions from coinbase</h4>
                <ToWalletLinkButton/>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default MainPage;