import React, { useState, useEffect } from 'react'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//以下import個人頁面
import HomePage from './chad/HomePage'

function App() {
  return (
    <>
   
   <ShakesBeardNavbar />
      <main role="main">
      <HomePage />
      <MyFooter />
      </main>
     
    </>
  )
}

export default App