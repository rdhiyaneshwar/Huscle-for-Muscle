import React from 'react'
import './main.css';
import { Link } from 'react-router-dom';
import log from '../images/logo.jpg'

const Main = () => {
  return (
    <>
    <div className='All'>
    <div className="l"><img src={log} alt="logo" className='logoimage'/></div>
    <h6>HUSTLE FOR MUSCLE</h6>
    <div className='card'>
    <div className='card1'>
        <span></span>
        <div className='card2'>
        <h2>Are you new here?</h2>
        <Link to="/signup" ><button className='button'>Signup</button></Link>
        <br/><br/>
        <h2>Already have an<br/>Account?</h2>
        <Link to="/login" ><button className='button'>Login &nbsp;</button></Link>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Main;