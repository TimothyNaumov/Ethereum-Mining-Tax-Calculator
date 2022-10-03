import React from 'react';
import SingleMainPage from './pages/SingleMainPage';
import LinkWalletHelp from './pages/Help/LinkWalletHelp';
import {render} from "react-dom"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingleMainPage/>}/>
                <Route path="/help" element={<LinkWalletHelp/>}/>
            </Routes>
        </BrowserRouter>
    )
}




export default AppRouter;