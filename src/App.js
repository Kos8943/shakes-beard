import React, { useState, useEffect } from 'react'
import MyFooter from './components/MyFooter'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Cart from './kos/pages/Cart'

function App() {
  return (
    <Router>
    <>
   <ShakesBeardNavbar />
      <main role="main">
        <Switch>
          <div className="footerFix">
            {/* 網頁內容跟Router放在這 */}
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