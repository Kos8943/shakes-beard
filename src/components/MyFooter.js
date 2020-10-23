import React, { useState, useEffect } from 'react'
import ig from '../icon/instagram.svg';
import fb from '../icon/facebook.svg';
import twitter from '../icon/twitter.svg';
import QRcode from '../icon/qrcode.png';
import line from '../icon/line.svg';


function MyFooter(props) {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
        

        <div className="footerlink d-flex justify-content-around">
          <span className="text-white">聯絡我們</span>
          <span className="text-white ">隱私權政策</span>
          <span className="text-white ">著作權聲明</span>
          <span className="text-white ">廣告合作</span> 
          </div>
          
          <div className="svg-area pt-4 d-flex justify-content-center">
            <img src={ig}></img>
            <img src={fb}></img>
            <img src={twitter}></img>      
            <img src={line}></img>      
            </div>
            <span className="d-flex justify-content-center mt-4">Copyright © 2020 Shakes Beard Inc.</span>
               
        
        </div>
        
      </footer>
    </>
  )
}

export default MyFooter
