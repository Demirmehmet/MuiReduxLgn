import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Button from "@mui/material/Button";

export const Navbar = () => {
    const history = useHistory();
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/main">Posts</Link>
                        <Button onClick={() => {
                            history.push('/login');
                            localStorage.clear();
                        }}>Logout</Button>
                    </div>
                </div>
            </section>
        </nav>
    )
}
