import { useState } from "react";

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await response.json();
        console.log(data);

        if (data.error) {
            document.getElementById('error').innerHTML = data.error;
        } else {
            window.location = 'login';
        }
        
    }

    return (
        <div id="register">
            <h1>Register</h1>

            <form onSubmit={onFormSubmit}>
                <input type={"text"} placeholder="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type={"text"} placeholder="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input type={"text"} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type={"password"} placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type={"submit"}>Login</button>
                <p id="error"></p>
                <p>Already have an account? <a href="login">Login</a></p>
            </form>
        </div>
        
    );
}