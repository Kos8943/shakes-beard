import React, { useState, useEffect } from 'react'
import MyFooter from './components/MyFooter'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Project from './hsuan/Project'
function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
    <ShakesBeardNavbar />
       <Switch>
            <Route exact path="/Project">
              <Project />
            </Route>
          </Switch>
         </Router>
      
=======
   
   <ShakesBeardNavbar />
      <main role="main">
      <h1>123</h1>
      <MyFooter />
      </main>
     
>>>>>>> 5bbc006f83f764a26525d76e533d057d378701b2
    </>
  )
}

export default App