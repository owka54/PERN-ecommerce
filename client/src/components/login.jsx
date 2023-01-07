import { useState } from "react";

export default function Login({setAuth}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: password
        }

        const response = await fetch('http://localhost:5000/auth/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(response);
        const data = await response.json();

        console.log(data);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user_id', data.user_id);
            setAuth(true);
            window.location = '/my-account';
        } else {
            setPassword('');
            console.log(data)
            document.getElementById("error").innerHTML = data.error;
            setAuth(false);
        }
    }

    return (
        <div id="login">
            <h1>Login</h1>

            <form onSubmit={onFormSubmit}>
                <input type={"text"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type={"password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={"submit"}>Login</button>
                <p id="error"></p>
                <p>Haven't got an account? <a href="register">Register Now</a></p>
            </form>
        </div>
        
    );
}