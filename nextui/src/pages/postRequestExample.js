import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

function postRequestExample() {
    function onSubmit(e){
        console.log("handling submit!");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id", "4");
        urlencoded.append("token", "sdfa3");
        urlencoded.append("geo", "us");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("http://localhost:7000/api/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return ( 
        <button type="button" className="btn btn-primary" onClick={onSubmit}>Upload</button>
     );
}

export default postRequestExample;