import React from "react";
import {useNavigate} from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
function ToUploadButton() {
    return ( 
        <Link to="/uploadCSV" className="btn btn-primary">Click to Upload CSV</Link>
     );
}

export default ToUploadButton;

//<button type="button" class="btn btn-success">Click to Upload CSV of Selling Transactions</button>