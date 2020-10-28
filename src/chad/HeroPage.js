import React from 'react'
import '../chad/styles/custom.scss';
import heromovie from './hero/heromovie.mp4'

function HeroPage(){
    return(
        <>
            {/* Hero Page*/}     
<video  loop="true" autoplay="autoplay"  muted="true" src={heromovie} className="heropage"></video>
<div className="hero-text-area">
    <h1 className="hero-text">WELCOME TO<br/>SHAKES BEARD</h1>
</div>

        </>
    )
}
export default HeroPage