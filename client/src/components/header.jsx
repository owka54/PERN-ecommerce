export default function Header() {
    return (
        <div id="header">
            <h1>PERN Store</h1>

            <div id="right-header">
                <ul className="nav-menu">
                    <li>
                        <a href="#" className="nav-link">Account</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}