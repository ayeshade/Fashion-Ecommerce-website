import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/Footer/footer'
import Topnav from '../components/navbar/topnav'
import TopCards from '../components/topCards'
import Banner from '../components/Banner/banner'
import Offer from '../components/offer'
import img from'../style/up-arrow.png'
import '../App.css'

import Homesection from '../components/HomeSection/homesection';
function home() {
  return (
    <>
      <Topnav/>
      <Navbar/>
      <Homesection/>
      <TopCards/>
      <Banner/>
        
       <Offer/>
      <Footer/>
      <a href="#" class="arrow"><i><img src={img} alt="" width="50px"></img></i></a>
     
    </>
   

  )
}

export default home

