import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <Link className="navbar-brand" to="/" >ExercTracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active"  to="/" >Exercises </Link>
            <Link className="nav-item nav-link"  to="/create" >Create Exercises Log</Link>
            <Link className="nav-item nav-link"  to="/user" >Create User</Link>
          </div>
        </div>
      </nav>
    )
}
