import React from 'react'
import '../chad/styles/custom.scss';
import heromovie from './hero/heromovie.mp4'

function HeroPage(){
    return(
        <>   
            
                <div className="bgimg">
                    <video  loop="true" autoplay="autoplay"  muted="true" src={heromovie} className="heropage d-flex justify-content-center"></video>
                   <div className="hero-text-area ">
                        <a className="hero-text" href='/homepage'>WELCOME TO SHAKES BEARD</a>
                        </div>
                    
                </div>
                
        </>
    )
}
export default HeroPage