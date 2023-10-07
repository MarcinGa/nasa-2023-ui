import React, { useState, useEffect } from 'react';
import './Header.scss';
import Search from '../Search/Search';
import {Route, Link, Routes} from 'react-router-dom';

function Header() {
    return <>
        <header className='main-header'>
            <div className="container">
                <Search />
            </div>
        </header>
    </>
}

export default Header;