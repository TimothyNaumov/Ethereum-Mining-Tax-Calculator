import React from 'react';
import SingleMainPage from './pages/SingleMainPage';
import HelpPage from './pages/Help/HelpPage';
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
                <Route path="/help" element={<HelpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}




export default AppRouter;