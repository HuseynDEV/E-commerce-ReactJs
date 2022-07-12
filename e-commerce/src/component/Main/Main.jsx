import React from 'react'
import Sidebar from './Sidebar'
import Slider from './Slide'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <Sidebar/>
        <Slider/>
    </div>
  )
}

export default Main