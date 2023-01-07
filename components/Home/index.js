import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

const Home = () => {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <h1 className='arogya'> Arogya setu</h1>
        <ul>
          <i><Link to="/register">Register </Link></i>
          <i><Link to="/login">Login </Link></i>
        </ul>

      </nav>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner botttn d-flex flex-column justify-content-center'>
            <h1> AROGYA SETU APP</h1>
            <p> it is helpful to save us from corona</p>
            <div>
            <i><Link to="/register" className='btn btn-primary'>Sign Up </Link></i>
           <i><Link to="/login" className='btn btn-light'>Login </Link></i>

            </div>
          </div>
        </div>

      </section>
    </div>

  )
}

export default Home
