import React from 'react';
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <ShakesBeardNavbar />
      <div>
      Hello
      </div>
    </>
  );
}

export default App;
