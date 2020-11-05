import React from 'react'
import '../chad/styles/custom.scss';
import heromovie from './hero/heromovie.mp4'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
        fadeIn:{
        animation:'x 5s',
        animationName:Radium.keyframes(fadeIn,'fadein')
    }
}

class HeroPage extends React.Component{
    render(){
        return(
        <StyleRoot>   
            
                <div className="bgimg">
                    <video  loop="true" autoplay="autoplay"  muted="true" src={heromovie} className="heropage d-flex justify-content-center"></video>
                   
                   <div className="hero-text-area" style={styles.fadeIn}>
                  
                        <a className="hero-text" href='/homepage'>WELCOME TO SHAKES BEARD</a>
                        </div>
                    
                </div>
                
        </StyleRoot>
        )
  
}
}
export default HeroPage
