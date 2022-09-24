import React from 'react'
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
    <h3>HomePage</h3>
    <Link to="/about">About</Link>
    </>
  )
}

export default HomePage