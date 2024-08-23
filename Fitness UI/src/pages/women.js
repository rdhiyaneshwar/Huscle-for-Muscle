import React from 'react'
import top from '../images/top.png'
import cycle from '../images/cycling.jpeg'
import squats from '../images/squats.jpg'
import benchpress from '../images/hulahoops.jpg'
import curl from '../images/ropeslams.jpg'
import './women.css'
import { Link } from 'react-router-dom';

const Women = () => {
  return (
    <>
    <div className='bg'>
    <div className='space'></div>
    <div className='top'>
      <img src={top} alt="workout img1" className='topimg'/>
      <div className='topright'>
      <p className='toptext'>
      EXERCISE IS TELLING YOUR BODY

      "YOU'RE GONNA HATE ME FOR THIS,
      
      BUT YOU WILL THANK ME LATER"
      </p>
      <div className='topsmall'>
        <h3 className='zzz'>WORKOUT FOR WOMEN</h3>
      </div>
      </div>
    </div>
    <div className='container'>
    <div className='box11'>
      <img className="proimage"src={cycle} alt="img1"/>
      <h3>Cycling</h3>
      <p class="subtext">45 mins</p>
      </div>
      <div className='box11'>
      <img className="proimage"src={squats} alt="img2"/>
      <h3>Squats</h3>
      <p class="subtext">15 mins</p>
      </div>
      <div className='box11'>
      <img className="proimage"src={curl} alt="img3"/>
      <h3>Rope slams</h3>
      <p class="subtext">10 mins</p>
      </div>
      <div className='box11'>
      <img className="proimage"src={benchpress} alt="img4"/>
      <h3>Hula hoops</h3>
      <p class="subtext">30 mins</p>
      </div>
    </div>
    
    <div className='finish1'><Link to="/"><button className='button1'>Finished</button></Link></div></div>
    </>
  )
}

export default Women;
