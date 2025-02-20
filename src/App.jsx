import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeaderFunc, DeskSystemSection, DevicesSection, ProductsFunc, OfficeInspiration} from './components/functions'
import './App.css'


const Devices = [
  {
      img: "/imgs/iMacs.png",
      name: "Desk Pads",
      more: "LEARN MORE"
  },
  {
      img: "/imgs/macbooks.png",
      name: "Laptop Stands",
      more: "LEARN MORE"
  }
]

const products = [
  {
    img: "/imgs/iphone.png",
    name: "Walnut Laptop Riser",
    cost: "$" + 120,
  },
  {
    img: "/imgs/laptop.png",
    name: "Walnut MagSafe Stand",
    cost: "$" + 150,
  },
  {
    img: "/imgs/ipad.png",
    name: "Walnut iPad Stand",
    cost: "$" + 80,
  },
  {
    img: "/imgs/monitor.png",
    name: "Walnut Monitor Stand",
    cost: "$" + 100,
  }
]


function App() {

  return (
    <center>
      <div className='container'>
        <HeaderFunc />
      </div>

      <DeskSystemSection/>

      <div className="container">
        <div className="designInspires">
          <h1>Design Inspires</h1>
          <p className='txt'>Build your dream workspace, so you can get your best work done.</p>
          <p className='getStarted'>GET STARTED</p>
        </div>

        <div className="devicesDiv">
          {
            Devices.map((device, idx) => (<DevicesSection key={idx} device={device} />))
          }
        </div>

        <div className="designInspires">
          <h1>Featured Products</h1>
          <p className='txt'>See What’s Trending Right Now</p>
        </div>

        <div className="productsDiv">
          {
            products.map((product, idx) => (<ProductsFunc key={idx} product={product} />))
          }
        </div>

      </div>

      <OfficeInspiration/>

    </center>
  )
}

export default App
