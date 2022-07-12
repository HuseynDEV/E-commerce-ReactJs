import Deals from '../component/Deals/Deals'
import React from 'react'
import Main from '../component/Main/Main'
import Discounts from '../component/Discounts/Discounts'
import Footer from '../component/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Main/>
        <Deals/>
        <Discounts/>
        <Footer/>
    </div>
  )
}

export default Home