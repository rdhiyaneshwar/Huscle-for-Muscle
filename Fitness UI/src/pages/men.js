import React from 'react'
import './menpage.css'
import top from '../images/topimg.jpg'
import cycle from '../images/cycling.jpg'
import squats from '../images/squat.jpg'
import benchpress from '../images/bench.jpg'
import curl from '../images/curls.jpg'
import { Link } from 'react-router-dom';

class Men extends React.Component{
 
  render(){
    return(
    <>
    <div class="menpage">
    <div className='space'></div>
    <div className='topz'>
      <img src={top} alt="workout img1" className='topimg'/>
      <div className='topright'>
      <p className='toptext'>
      You are not only working out you are preparing to unfold the best version of yourself
      </p>
      <div className='topsmall'>
        <h3 className='zzz'>WORKOUT FOR MEN</h3>
      </div>
      </div>
    </div>
    <div className='container'>
      <div className='box1'>
      <img className="proimage"src={cycle} alt="img1"/>
      <h3>Cycling</h3>
      <p class="subtext">10 mins</p>
      </div>
      <div className='box2'>
      <img className="proimage"src={squats} alt="img2"/>
      <h3>Squats</h3>
      <p class="subtext">10 Reps x 2 Sets</p>
      </div>
      <div className='box3'>
      <img className="proimage"src={curl} alt="img3"/>
      <h3>Bicep curls</h3>
      <p class="subtext">10 Reps x 2 Sets</p>
      </div>
      <div className='box3'>
      <img className="proimage"src={benchpress} alt="img4"/>
      <h3>Bench press</h3>
      <p class="subtext">4 Reps x 2 Sets</p>
      </div>
    </div>
    <div className='finish1'><Link to="/"><button className='button1'>Finished</button></Link></div>
    </div>
    </>
    )
  }
}
export default Men;