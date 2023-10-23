import React, { useState } from "react";

export default function NavBar(){
   const [ButtonClass,SetButtonClass] = useState("menu-button")
   const [NavClass,SetNavClass] = useState("nav-bar")
   const body = document.querySelector("body");


    return(
        <>
    <nav className={NavClass}>
        <ul className="nav-list">
               <li className="nav-item"><a href="#" className="nav-link">About</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Careers</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Events</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
               <li className="nav-item"><a href="#" className="nav-link">Support</a></li> 
        </ul>
    </nav>

    
            <div className={ButtonClass}
            onClick={()=>{         
                body.style.overflow="hidden";
                
                if(ButtonClass === "menu-button"){
                    SetButtonClass("menu-button menu-button-active");
                    SetNavClass("nav-bar nav-bar-active");
                }else{
                    SetButtonClass("menu-button");
                    SetNavClass("nav-bar");
                }
            }}>
                <span id="bar1"></span>
                <span id="bar2"></span>
                <span id="bar3"></span>
            </div>
</>
    )
}