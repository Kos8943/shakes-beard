import React from 'react';
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Project from './hsuan/Project'
function App() {
  return (
    <>
    <Router>
    <ShakesBeardNavbar />
       <Switch>
            <Route exact path="/Project">
              <Project />
            </Route>
          </Switch>
         </Router>
      
    </>
  );
}

export default App;
