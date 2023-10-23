import React from "react";
import NavBar from './navBar'
import Logo from "../images/logo.svg"

export default function Header(){
    return(
        <header className="header-page">
                <div>
                    <img src={Logo} alt="logo" className="logo"/>
                    <NavBar/>
                    
                                <section className="apresentation-text">
                        <h1>Immersive
                        <br/>experiences
                        <br/>that deliver
                        </h1>
                                </section>
                </div>
        </header>
    )
}