import React from 'react'
import './difficulty.css';
import { Link } from 'react-router-dom';

const Difficulty = () => {
  return (
    <>
    <div className='diffbody'>
        <div className='diffspace'>
        <h6 className='headerr'>Difficulty Level</h6>
        </div>
        
        <div className='diffpage'>
         <div className="mag">
          <h6 className='diffh1'><Link to='/gender' className='difflink'>BASIC</Link></h6>
         </div>
         <div className="mag1">
            <h6 className='diffh1'><Link to='/gender'className='difflink'>INTERMEDIATE</Link></h6>
         </div>
         <div className="mag2">
            <h6 className='diffh1'><Link to='/gender'className='difflink'>ADVANCED</Link></h6>
         </div>
         </div>
         </div>
    </>
  )
}

export default Difficulty;