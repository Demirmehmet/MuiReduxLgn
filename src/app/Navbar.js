import React from 'react'
import {Link, useHistory} from 'react-router-dom'

export const Navbar = () => {
    const history = useHistory();
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/main">Posts</Link>
                        <Link to="/productsPage">Products</Link>
                        <Link to="/login" onClick={() => {
                            history.push('/login');
                            localStorage.clear();
                        }}> Logout
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
