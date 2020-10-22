import React, { useState, useEffect } from 'react'
import MyFooter from './components/MyFooter'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
   
   <ShakesBeardNavbar />
      <main role="main">
      <h1>123</h1>
      <MyFooter />
      </main>
     
    </>
  )
}

export default App