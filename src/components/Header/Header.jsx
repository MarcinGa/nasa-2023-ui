import React, { useState, useEffect } from 'react';
import './Header.scss';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import UserLogin from '../UserLogin/UserLogin';
import {Route, Link, Routes} from 'react-router-dom';

function Header() {
    return <>
        <header className='main-header'>
            <div className="container">
                <Logo />
                <Search />
                <UserLogin />
            </div>
        </header>
    </>
}

export default Header;