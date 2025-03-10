import React from 'react'
import './Header.css'
import HeaderLeft from './headerleft/HeaderLeft'
import HeaderRight from './headeright/HeaderRight'

const Header = () => {
  return (
    <div className='header-parent'>
      <HeaderLeft/>
      <HeaderRight/>
    </div>
  )
}

export default Header
