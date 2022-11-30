import React from 'react';
import SingleMainPage from './pages/SingleMainPage';
import HelpPage from './pages/Help/HelpPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import About from './pages/About';
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
                <Route path="/help" element={<HelpPage/>}/>
                <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}




export default AppRouter;