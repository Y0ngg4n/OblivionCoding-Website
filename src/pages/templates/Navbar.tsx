import React from "react";
import {Link} from "react-router-dom";

function Navbar(navbarIndex: number) {
    return (
        <header>
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="container-lg">
                        <Link to="/" className="navbar-brand">
                            <img className="logo mr-2" src="https://cdn.oblivioncoding.pro/Logo.png" alt="Logo"/>OblivionCoding
                        </Link>
                        <ul className="nav navbar-nav nav-">
                            <li className={`nav-item ${navbarIndex === 1 ? "active" : ""}`}>
                                <Link to="/community" className="nav-link">Community</Link>
                            </li>
                            <li className={`nav-item ${navbarIndex === 2 ? "active" : ""}`}>
                                <Link to="/projects" className="nav-link">Projekte</Link>
                            </li>
                            <li className={`nav-item ${navbarIndex === 3 ? "active" : ""}`}>
                                <Link to="/games" className="nav-link">Games</Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://blog.oblivioncoding.pro" className="nav-link"
                                   target="_blank" rel="noopener noreferrer">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;