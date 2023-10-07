import React, { useState, createContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import { AuthProvider } from './components/AuthContext/AuthContext'; // Importuj dostawcę kontekstu
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ContextData = createContext();
let Token = '';

function App() {
  return (
    <>
    {/* <Token.Provider value={'dupa'}> */}
      <React.StrictMode>
        <AuthProvider>
          <Router>
              <Routes>
                <Route path="/" element={ <Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
              </Routes>
          </Router>
        </AuthProvider>
      </React.StrictMode>
    {/* </Token.Provider> */}
    </>
  )
}

export default App
