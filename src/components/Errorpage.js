import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <>
         <div id="notfound">
             <div className="notfound">
                 <div className="notfound-404">
                     <h1>404</h1>
                 </div>
                 <h2>We are Sorry Page Not Found</h2>
                 <p className='mb-5'>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                 </p>
                 <NavLink to="/" >Back to Homepage</NavLink>
                 </div>
                 </div>   
        </>
    )
}

export default Errorpage
