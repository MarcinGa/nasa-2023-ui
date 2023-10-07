import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

import './UserLogin.scss';

function UserLogin() {
    return <>
        <div className="user-login">
            <FontAwesomeIcon icon={faUser} />
            <ul className="login-list">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    </>
}

export default UserLogin;