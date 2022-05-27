import React, { useState } from 'react';
import Papa from 'papaparse';

function UploadCSV() {
    const [file, setFile] = useState();
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [values, setValues] = useState([]);

    function onChange(e){
        setFile(e.target.files[0]);
    }

    function onSubmit(e){
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results){
                //console.log(results.data)
                const rowsArray = [];
                const valuesArray = [];

                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                setParsedData(results.data);

                setTableRows(rowsArray[0]);

                setValues(valuesArray);
            },
        });
        /*
        var formdata = new FormData();
        formdata.append("transactions", file);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        
        fetch("http://localhost:7000/upload-csv", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        */
    };

    return ( 
        <div>
            <label htmlFor="formFile" className="form-label">Upload CSV of selling transactions from Coinbase</label>
            <input className="form-control" type="file" id="csvFileInput" accept={".csv"} onChange={onChange}></input>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Upload</button>

            <br />
            <br />
            {/* Table */}
            <table>
                <thead>
                <tr>
                    {tableRows.map((rows, index) => {
                    return <th key={index}>{rows}</th>;
                    })}
                </tr>
                </thead>
                <tbody>
                {values.map((value, index) => {
                    return (
                    <tr key={index}>
                        {value.map((val, i) => {
                        return <td key={i}>{val}</td>;
                        })}
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
     );
}

export default UploadCSV;