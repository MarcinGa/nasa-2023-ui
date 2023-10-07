import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

import './UserLogin.scss';

function UserLogin() {
    const { token, login, logout } = useAuth();
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(!!token); // Ustaw logged na true, jeśli token nie jest pusty
    }, [token]);

   

    return <>
        <div className="user-login">
            {logged ? (
                <ul className="login-list">
                    <li><Link to="/account">Account</Link></li>
                    <li onClick={() => logout()}>Logout</li>
                </ul>
            ) : (
                <ul className="login-list">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            )}
            <FontAwesomeIcon icon={faUser} />
            {/* {ifLogged()} */}
        </div>
    </>
}

export default UserLogin;