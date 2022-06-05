import ToWalletLinkButton from "../Components/ToWalletLinkButton";
import Header from '../Components/Header';
import NavigationBar from "../Components/NavigationBar";
const MainPage = () => {
    return ( 
      <div>
        <NavigationBar/>
        
        <div className='p-5 text-center bg-image' style={{ backgroundColor: "#45728c", height:"100%", width: "100%"}}>
          <div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-white'>
                <h1 className='mb-3'>Ethereum Mining Capital Gain/Loss Calculator</h1>
                  <ToWalletLinkButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default MainPage;

/*
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

        <div class="container bg-primary text-white">
          <h1 class="display-4">Generate Form 8949 for Crypto Transactions</h1>
          <p class="lead">Use a public Ethereum wallet address and Coinbase transactions to generate a capital gain/loss report</p>
        </div>
*/