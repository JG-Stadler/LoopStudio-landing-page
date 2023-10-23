import React from "react";
import CriationsBanner from './creation-baner'

// Desktop Images

import Earth from '../images/desktop/image-deep-earth.jpg'
import Arcade from '../images/desktop/image-night-arcade.jpg'
import Soccer from '../images/desktop/image-soccer-team.jpg'
import Grid from '../images/desktop/image-grid.jpg'
import Borealis from '../images/desktop/image-pocket-borealis.jpg'
import Above from '../images/desktop/image-from-above.jpg'
import Curiosity from '../images/desktop/image-curiosity.jpg'
import Fisheye from '../images/desktop/image-fisheye.jpg'

// Mobile images

import EarthMobile from '../images/mobile/image-deep-earth.jpg'
import ArcadeMobile from '../images/mobile/image-night-arcade.jpg'
import SoccerMobile from '../images/mobile/image-soccer-team.jpg'
import GridMobile from '../images/mobile/image-grid.jpg'
import BorealisMobile from '../images/mobile/image-pocket-borealis.jpg'
import AboveMobile from '../images/mobile/image-from-above.jpg'
import CuriosityMobile from '../images/mobile/image-curiosity.jpg'
import FisheyeMobile from '../images/mobile/image-fisheye.jpg'


export default function OurCreations(){

        const body = document.querySelector("body");
    if(body.clientWidth >= 1250){
        return(
            <section className="our-creations">
    
                        <h1>Our creations</h1>
                        <a href="#">See all</a>
    
                        <CriationsBanner title="Deep earth" propID="earth-banner" src={Earth}/>
                        <CriationsBanner title="Night arcade" propID="arcade-banner" src={Arcade}/>
                        <CriationsBanner title="Soccer team VR" propID="soccer-banner" src={Soccer}/>
                        <CriationsBanner title="The grid" propID="grid-banner" src={Grid}/>
                        <CriationsBanner title="Pocket borealis" propID="borealis-banner" src={Borealis}/>
                        <CriationsBanner title="From up above VR" propID="aboveVR-banner" src={Above}/>
                        <CriationsBanner title="The curiosity" propID="curiosity-banner" src={Curiosity}/>
                        <CriationsBanner title="Make it fisheye" propID="fisheye-banner" src={Fisheye}/>
            </section>
        )
    }
    else{
        return(
            <section className="our-creations">
    
                        <h1>Our creations</h1>
                        <a href="#">See all</a>
    
                        <CriationsBanner title="Deep earth" propID="earth-banner" src={EarthMobile}/>
                        <CriationsBanner title="Night arcade" propID="arcade-banner" src={ArcadeMobile} />
                        <CriationsBanner title="Soccer team VR" propID="soccer-banner" src={SoccerMobile} />
                        <CriationsBanner title="The grid" propID="grid-banner" src={GridMobile} />
                        <CriationsBanner title="Pocket borealis" propID="borealis-banner" src={BorealisMobile} />
                        <CriationsBanner title="From up above VR" propID="aboveVR-banner" src={AboveMobile} />
                        <CriationsBanner title="The curiosity" propID="curiosity-banner" src={CuriosityMobile} />
                        <CriationsBanner title="Make it fisheye" propID="fisheye-banner" src={FisheyeMobile} />
            </section>
        )
    }
}