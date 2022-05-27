import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import UploadCSV from './pages/UploadCSV';
import LinkWallet from './pages/LinkWallet';
import MainPage from './pages/MainPage';
import PostRequestExample from './pages/postRequestExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage/>}></Route>
        <Route path="linkWallet" element={<LinkWallet/>}></Route>
        <Route path='uploadCSV' element={<UploadCSV/>}/>
        <Route path='postExample' element={<PostRequestExample/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
