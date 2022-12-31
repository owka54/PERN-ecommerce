export default function Header({isAuth}) {
    return (
        <div id="header">
            <h1>PERN Store</h1>

            <div id="right-header">
                <ul className="nav-menu">
                    <li>
                        
                        {isAuth ? <a href="my-account" className="nav-link">Account</a> : <a href="login" className="nav-link">Login</a>}
                    </li>
                    <li>
                        <a href="cart" className="nav-link">Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}