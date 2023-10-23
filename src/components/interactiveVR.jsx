import React from "react";
import VR from '../images/desktop/image-interactive.jpg'

    export default function VRsection(){
        return(
            <section className="interactiveVR">
                <img src={VR} alt="VR" 
                className="VRinteracive-img"/>

                <div className="VRtxt">
                    <h1>The leader in<br />interactive VR</h1>
                    <small>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </small>
                </div>
            </section>
        )
    }