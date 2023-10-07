import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext/AuthContext'; // Importuj hook useAuth
import './AcountComponent.scss';

function AccountComponent() {
    const { token } = useAuth();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {        
        async function fetchUser() {
            try {
                const response = await fetch('https://nasa-2023-server.onrender.com/user/users/65217eff4d6d8a38cd4b7c6f', { 
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${token}` // Dodaj token do nagłówka żądania
                    },
                });
                if (response.status === 200) {
                    const data = await response.json();
                    console.log(data);
                    setUser(data);
                } else {
                    throw new Error('Nieudane żądanie');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);
    return <>
        <section className="account">
            <div className="container">
                <div className="account-inner">
                    <div className="first-section flexed">
                        <div className="image">

                        </div>
                        <div className="info">
                            <p>Name: {user.username}</p>
                            <p>City: {user.city}</p>
                        </div>
                    </div>
                    <div className="second-section">
                        <p>Academic title: {user.academicTitle}</p>
                        <p>Education: {user.education}</p>
                        <p>Location: {user.country}</p>
                        
                    </div>
                    <div className="third-section">
                        <form action="">
                            <label htmlFor="interests">Self-description, interests</label>
                            <textarea name="interests" id="interests" cols="30" rows="10"></textarea>
                            <label htmlFor="achievements">Scientific achievements to date</label>
                            <textarea name="achievements" id="achievements" cols="30" rows="10"></textarea>
                        </form>
                    </div>
                    <div className="fourth-section">
                        <p>Reviews</p>
                    </div>
                </div>
                
            </div>
        </section>
    </>
}

export default AccountComponent;