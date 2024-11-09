import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigate from './Navigate.jsx'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState(0);
  
  function updateCart(amount){
    setCart(amount);
  }

  return (
    <>
    <div className='nav'>
      <Navigate cartAmount = {cart}/>
    </div>
    <div className='main-body'>
      {/* handleClick below won't work */}
      <Outlet handleClick = {updateCart}/>
    </div>
    </>
  )
}

export default App
