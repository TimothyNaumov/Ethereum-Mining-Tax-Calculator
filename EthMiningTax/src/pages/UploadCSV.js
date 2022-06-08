import UploadCSVBox from '../Components/UploadCSVBox';
import NavigationBar from '../Components/NavigationBar';

function UploadCSV() {
    return ( 
        <div>
            <NavigationBar/>
            <div className='container-fluid'>
                <UploadCSVBox/>
            </div>
        </div>
        
     );
}

export default UploadCSV;