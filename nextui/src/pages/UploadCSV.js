import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadCSVBox from '../Components/UploadCSVBox';
import Header from '../Components/Header';

function UploadCSV() {
    return ( 
        <div>
            <Header/>
            <div className='container-fluid'>
                <UploadCSVBox/>
            </div>
            
        </div>
        
     );
}

export default UploadCSV;