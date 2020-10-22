import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

import React from 'react';
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
   
      <MyNavbar />
      <main role="main" className="flex-shrink-0">
          
      </main>
      <MyFooter />
     
     
    <ShakesBeardNavbar />
      <div>
      Hello
      </div>
    </>
  )
}

export default App