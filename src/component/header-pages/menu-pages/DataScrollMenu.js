import React, {Component} from 'react';
import {Link} from "react-router-dom";

class DataScrollMenu extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ml-auto align-items-center">
                    <Link className="scroll-item nav-link active" data-scroll-nav="0" to="#home">Home</Link>
                    <Link className="scroll-item nav-link" data-scroll-nav="1" to="#about-us">About us</Link>
                    <Link className="scroll-item nav-link" data-scroll-nav="2" to="#works">Protfolio</Link>
                    <Link className="scroll-item nav-link" data-scroll-nav="4" to="#pricing">Training center</Link>
                    <Link className="scroll-item nav-link" data-scroll-nav="5" to="#team">Our team</Link>

                    <Link className="scroll-item nav-link" data-scroll-nav="7" to="#contact-us">Contact us</Link>
                    <span className="menu-arrow"></span>
                </div>
            </div>
        );
    }
}

export default DataScrollMenu;