import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <h3>NavBar</h3>
    <div>
        <Link to="/">home</Link> || {''}
        <Link to="/about">About</Link> || {''}
        <Link to="/users">Users</Link>
    </div>
</div>
  )
}

export default NavBar;