import React from "react";
import {useNavigate} from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
function ToWalletLinkButton() {
    return ( 
        <Link to="/linkwallet" className="btn btn-primary">Get Started!</Link>
     );
}

export default ToWalletLinkButton;

//<button type="button" class="btn btn-success">Click to Upload CSV of Selling Transactions</button>