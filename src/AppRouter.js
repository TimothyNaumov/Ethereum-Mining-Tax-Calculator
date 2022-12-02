import React from 'react';
import SingleMainPage from './pages/SingleMainPage';
import HelpPage from './pages/HelpPage';
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
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}




export default AppRouter;