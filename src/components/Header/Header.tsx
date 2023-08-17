import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { slide as Menu } from 'react-burger-menu';

export const Header = () => {
    return (
        <>
            <nav className="navBar">
                <h2>Leila</h2>
                <div>
                    <Link to="/" style={{ padding: 5 }}>
                        Home
                    </Link>
                    <Link to="/about" style={{ padding: 5 }}>
                        About
                    </Link>
                    <Link to="/education" style={{ padding: 5 }}>
                        Education
                    </Link>
                    <Link to="/experience" style={{ padding: 5 }}>
                        Experience
                    </Link>
                    <Link to="/contact" style={{ padding: 5 }}>
                        Contact
                    </Link>
                </div>
            </nav>

            <div className="navBarMobile">
                <Menu>
                    <a className="menu-item" href="/">
                        Home
                    </a>
                    <a className="menu-item" href="/about">
                        About
                    </a>
                    <a className="menu-item" href="/education">
                        Education
                    </a>
                    <a className="menu-item" href="/experience">
                        Experience
                    </a>
                    <a className="menu-item" href="/contact">
                        Contact
                    </a>
                </Menu>
                <p>Leila</p>
            </div>
        </>
    );
};
