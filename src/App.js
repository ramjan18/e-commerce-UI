
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='w-screen flex justify-center items-center h-[50px] bg-slate-800  '>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>      
      
      



      
    </div>
  );
}

export default App;
