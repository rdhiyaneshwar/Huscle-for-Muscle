import './signup.css';
import { Link } from 'react-router-dom';
function Signup(){
    return(
        <>
        <div className='boo'>
        {/*<img src={photo} className="App-logo" alt="logo" />*/}
        <h5 className='heading'>SignUp here</h5>
          
            <label>Username  </label>
            <input type= "text" name="username" required="required" className='vertical-center'></input> <br />
            <label>Age  </label>
            <input type="number" name="age"className='vertical-center'required="required"/> <br/>
            <label>Height  </label>
            <input type="number" name="height"className='vertical-center'required="required"/> <br/>
            <label>Weight  </label>
            <input type="number" name="weight"className='vertical-center'required="required"/> <br/>
            <label>Mail  </label>
            <input type="mail" name="mail" className='vertical-center'required="required"/> <br/>
            <label>Password  </label>
            <input type="password" name="password"className='vertical-center'required="required"/> <br/><br/>
            <Link to='/difficulty'><button className='button'>There you goo</button></Link>
    </div>
    </>
    )
}
export default Signup;