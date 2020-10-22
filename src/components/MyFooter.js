import React, { useState, useEffect } from 'react'

function MyFooter(props) {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
        

        <div className="footerlink d-flex justify-content-around">
          <span className="text-muted ">聯絡我們</span>
          <span className="text-muted ">隱私權政策</span>
          <span className="text-muted ">著作權聲明</span>
          <span className="text-muted ">廣告合作</span> 
          </div>
          <div className="contact-area">
          <div className="svg-area d-flex justify-content-center p-3">
            <a href="#"><img src=""></img></a>
            <a>fb</a>
            <a>tw</a>
            </div>
            <span className="d-flex justify-content-center">Copyright © 2020 Shakes Beard Inc.</span>
          </div>       
        
        </div>
      </footer>
    </>
  )
}

export default MyFooter
