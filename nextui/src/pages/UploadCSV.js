import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadCSVBox from '../Components/UploadCSVBox';
import Header from '../Components/Header';
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