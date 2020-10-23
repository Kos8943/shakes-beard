import React, { useState, useEffect } from 'react'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


//以下import個人頁面
import HomePage from './chad/HomePage'
import Project from './hsuan/Project'
import Cart from './kos/pages/Cart'

function App() {
  return (
    <Router>
    <>
   <ShakesBeardNavbar />
      <main role="main">
      
        <Switch>
        <Route exact path="/">
        <HomePage />
        </Route>
          <div className="footerFix">
            {/* 網頁內容跟Router放在這 */}
            <Route exact path="/Project">
              <Project />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </div>
        </Switch>
      <MyFooter />
      </main>
    </>
    </Router>
  )
}

export default App