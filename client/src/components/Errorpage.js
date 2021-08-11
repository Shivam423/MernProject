import React from 'react';
import {NavLink} from "react-router-dom"

const Errorpage = ()=>{
    return(
        <>
        <div className="error-page">
        <p>404</p>
          <h1>Page not found</h1>
          <NavLink to="/" className="err-btn mt-3">Go back home</NavLink>
          </div>
        </>
    )
}

export default Errorpage;