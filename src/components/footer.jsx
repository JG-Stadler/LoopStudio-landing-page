import React from "react";
import logo from '../images/logo.svg'

import instagran from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

export default function Footer(){
    return(
        <footer className="page-footer">
            <img src={logo} alt="logo" />

            <nav className="nav-footer"> 
                <a href="#" className="nav-link-footer">About</a>
                <a href="#" className="nav-link-footer">Careers</a>
                <a href="#" className="nav-link-footer">Events</a>
                <a href="#" className="nav-link-footer">Products</a>
                <a href="#" className="nav-link-footer">Support</a>
            </nav>

            <nav className="social-midias">
                <a href="#"><img src={facebook} alt="social midia logo" /></a>
                <a href="#"><img src={twitter} alt="social midia logo" /></a>
                <a href="#"><img src={pinterest} alt="social midia logo" /></a>
                <a href="#"><img src={instagran} alt="social midia logo" /></a>
            </nav>

            <small>
            © 2021 Loopstudios. All rights reserved.
            </small>
        </footer>
    )
}