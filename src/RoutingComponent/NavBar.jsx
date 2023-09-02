import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav>
            <Link to="home">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="index">Index</Link>
        </nav>


    </div>
  )
}
