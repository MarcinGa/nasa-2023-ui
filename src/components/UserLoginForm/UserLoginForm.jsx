import React, { useState, useEffect , useContext } from 'react';
import { useAuth } from '../AuthContext/AuthContext';
import './UserLoginForm.scss';

function UserLoginForm() {
    // const contextData = useContext(Token);
    const { token, login } = useAuth();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [user, setUser] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('https://nasa-2023-server.onrender.com/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: password,
                    email: email
                })
            });
            let resJson = await res.json(); // Parse the response as JSON
            if (res.status === 200) {
                // Access the parsed JSON data
                // console.log(JSON.stringify(resJson.token));
                // let token = JSON.stringify(resJson.token);
                // localStorage.setItem("JWT", resJson.token);
                // localStorage.setItem("JWT", resJson.token); // Assuming 'token' is a property in the JSON response
                console.log(token);
                login(resJson.token);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return <>
        <div className="container">
            {/* {console.log(contextData)} */}
            <form className="user-login-form" onSubmit={handleSubmit}>
                <label htmlFor="userEmail">User email</label>
                <input type="text" id="userEmail" name="userEmail" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="userPassword">User password</label>
                <input type="text" id="userPassword" name="userPassword" onChange={(e) => setPassword(e.target.value)}/>
                <button>Send</button>
            </form>
        </div>
        
    </>
}

export default UserLoginForm;