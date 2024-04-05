
import './App.css';

import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navi from './components/Navi';
import Profile from './components/Profile';
import PrivateCom from './components/PrivateCom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <h1 className='decoration-8 text-6xl line-height-1 text-red-600 font-bold my-8'>Ekaksh</h1>

      <Navi/>
      <Routes>
        <Route element={<PrivateCom/>}>
        
        
        
        <Route path="/profile" element={<Profile/>}></Route>
        
        
        </Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/Upload' element={<Upload/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
