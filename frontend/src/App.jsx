// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import ProductCart from './components/ProductCart'
import ProductItem from './components/ProductItem'
import Typoraphy from './components/Typoraphy'

function App() {

  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        </div>
        <Typoraphy 
        component= 'h1'
        className='cardTitle'
        text="Our Products"
        />
        <div className="cardBody">
          <ProductItem/>

        </div>
      </div>
      <div className="card">
        <Cart/>
        
        <ProductCart/>
      </div>
    </div>

  )
}

export default App
