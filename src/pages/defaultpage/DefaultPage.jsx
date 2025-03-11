import React from 'react'
import Header from './header/Header'
import DefaultNavbar from './defaultnav/DefaultNavbar'
import DefaultMiddle from './defaultmiddle/DefaultMiddle'
import DefaultCard from './defaultcard/DefaultCard'
import DefaultHistory from './defaulthistory/DefaultHistory'
import DefaultAds from './defaultAds/DefaultAds'
import DefaultMiddleFooter from './defaultmiddleFooter/DefaultMiddleFooter'
import Footer from '../../components/footer/Footer.jsx'

const DefaultPage = () => {
  return (
    <div className='de-parent'>
        <DefaultNavbar/>
      <Header/>
      <DefaultMiddle/>
      <DefaultCard/>
      <DefaultHistory/>
      <DefaultAds/>
      <DefaultMiddleFooter/>
      <Footer/>
    </div>
  )
}

export default DefaultPage
