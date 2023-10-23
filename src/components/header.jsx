import React from "react";
import NavBar from './navBar'
import Logo from "../images/logo.svg"
import '../mobile-menu.css'

export default function Header(){
    return(
        <header className="header-page">
                    <img src={Logo} alt="logo" className="logo"/>

                    <NavBar/>
                    
                <section className="apresentation-text">
                    <h1>Immersive
                    <br/>experiences
                    <br/>that deliver
                    </h1>
                </section>
        </header>
    )
}