import './App.css';
import Home from './Pages/Home/index';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Pages/Signup/index';
import Dashboard from './Pages/dashboard/Index';
import Doctor from './Pages/Doctor/Index';
import Login from './Pages/login/index';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/Login' element={<Login/>}/>

      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/Doctor' element={<Doctor/>}/>



      
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
