import React from "react";
import CriationsBanner from './creations'

export default function OurCreations(){
    return(
        <section className="our-creations">

                    <h1>Our creations</h1>
                    <a href="#">See all</a>

                    <CriationsBanner title="Deep earth" propID="earth-banner"/>
                    <CriationsBanner title="Night arcade" propID="arcade-banner"/>
                    <CriationsBanner title="Soccer team VR" propID="soccer-banner"/>
                    <CriationsBanner title="The grid" propID="grid-banner"/>
                    <CriationsBanner title="Pocket borealis" propID="borealis-banner"/>
                    <CriationsBanner title="From up above VR" propID="aboveVR-banner"/>
                    <CriationsBanner title="The curiosity" propID="coriosity-banner"/>
                    <CriationsBanner title="Make it fisheye" propID="fisheye-banner"/>
        </section>
    )
}