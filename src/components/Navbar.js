import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img src="" className='' alt="Logo Img"/>
    </NavLink>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item active" >
            <NavLink to="/" className='nav-link' >Home <span className='sr-only'>(current)</span></NavLink>
        </li>
        <li className="nav-item active" >
            <NavLink to="/about" className='nav-link' >About<span className='sr-only'>(current)</span></NavLink>
        </li>
        <li className="nav-item active" >
            <NavLink to="/contact" className='nav-link' >Contact<span className='sr-only'>(current)</span></NavLink>
        </li>
        <li className="nav-item active" >
            <NavLink to="/login" className='nav-link' >Login<span className='sr-only'>(current)</span></NavLink>
        </li>
        <li className="nav-item active" >
            <NavLink to="/signup" className='nav-link' >Registration<span className='sr-only'>(current)</span></NavLink>
        </li>
          
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar