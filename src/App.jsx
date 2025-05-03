import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartDetails from './Components/CartDetails';
import Headers from './Components/Headers';
import Home from './Components/Home';
function App() {
  
  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
