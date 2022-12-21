import { useEffect } from "react";
import { useState } from "react";

export default function Account() {

    const [user, setUser] = useState();

    const user_id = localStorage.getItem('user_id');

    const getUser = async () => {
        const response = await fetch(`http://localhost:5000/users/${user_id}`);
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div id="account">
            <h1>My Account</h1>
            <div id="info">
                <h2>Name: {user ? user.firstname : "Name"}</h2>
                <h3>Email: {user ? user.email : "email"}</h3>
            </div>

            <button onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                window.location = '/';
            }}>Sign Out</button>

            <div id="orders">
                <p>orders</p>
            </div>
        </div>
    );
}