import React from 'react'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Singup from './components/Signup'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import './App.css'
const App = () => {
  return (
    <>
    <Navbar/>
    <Route exact path="/" >
    <Home/>
    </Route>
    <Route exact path='/about' >
    <About/>
    </Route>
    <Route exact path='/contact' >
    <Contact/>
    </Route>
    <Route  exact path='/login' >
    <Login/>
    </Route>
    <Route exact path='/signup' >
    <Signup/>
    </Route>
    {/* <Route >
        <Errorpage/>
    </Route> */}
    </>
  )
}

export default App
