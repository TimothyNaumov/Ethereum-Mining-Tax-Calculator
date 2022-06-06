import '../App.css';
import AddressInput from '../Components/AddressInput';
import BalanceBox from '../Components/BalanceBox';
import AddressBox from '../Components/AddressBox';
import TransactionBox from '../Components/TransactionBox';
import NextButton from '../Components/NextButton';
import NavigationBar from '../Components/NavigationBar';

const LinkWallet = () => {
  return (
    <div>
        <NavigationBar/>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <AddressInput/>
                <NextButton destination="/uploadcsv" text="Click to upload csv"/>
              </div>
              <div className='col'>
                <AddressBox/>
                <BalanceBox/>
              </div>
            </div>
          </div>
          <TransactionBox/>
    </div>
  );
};

export default LinkWallet;
