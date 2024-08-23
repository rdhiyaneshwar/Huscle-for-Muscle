import './gender.css';
import male from '../images/male.png';
import female from '../images/female.png';
import { Link } from 'react-router-dom';

function Gender(){
    return(
        <>
        <div className='bg1'>
        <div className='gap'></div>
        <div className='A1'>
            <h4 className='A11'>Choose your Gender</h4>
        </div>  
        <div className='imageee'> 
        
            <Link to='/men'><img src={male} className="box111" alt='img' /></Link>
            <Link to='/women'><img src={female} className="box222" alt='img' /></Link>
        </div>
        <div className='mm'>
        <Link to='/men' className='mwlink'>
            <h4 className='malee'>Male</h4>
        </Link>
        <Link to='/women' className='mwlink'>
            <h4 className='femalee'>Female</h4>
        </Link>
        </div>   
        </div>

        </>
    )
}
export default Gender;