import Men from './pages/men.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './pages/main.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Women from './pages/women.js';
import Gender from './pages/gender.js';
import Difficulty from './pages/difficulty.js';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/gender' element={<Gender/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/difficulty' element={<Difficulty/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

