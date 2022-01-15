import React from 'react';
import { Link } from "react-router-dom"
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav id="navBar" className="navbar navbar-expand-lg bg-white ">
                <div className="container">
                   

                    <a href={"/"} id="roque-santeiro" className="navbar-brand"><i className="fa fa-desktop"></i> DIENDUALA</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto text-danger">
                            <li className="nav-item active"><Link className="nav-link" to="/">HOME</Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/about">ABOUT</Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/skills">SKILLS</Link></li>
                            <li className="nav-item "><Link className="nav-link" to="/projects">PROJECTS</Link></li>
                        </ul>
                
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
