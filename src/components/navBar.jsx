import React, { useState } from "react";

export default function NavBar(){
   const [activeMenu,activateMenu] = useState(false)
    return(
    <nav className="nav-bar">
        <ul className="nav-list">
               <li className="nav-item"><a href="#" className="nav-link">About</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Careers</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Events</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Support</a></li> 
        </ul>

            <div className="menu-button">
                <span className="menu-button-bar"></span>
                <span className="menu-button-bar"></span>
                <span className="menu-button-bar"></span>
            </div>

    </nav>
    )
}