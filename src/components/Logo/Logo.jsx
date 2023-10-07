import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Logo.scss';

function Logo() {
    return <>
        <div className="logo">
            <Link to="/">Logo</Link>
        </div>
    </>
}

export default Logo;