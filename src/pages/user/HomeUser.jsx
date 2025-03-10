import React from 'react'
import HomeUserLeft from './homeleft/HomeUserLeft'
import HomeUserRight from './homeright/HomeUserRight'

const HomeUser = () => {
  return (
    <div>
        <div>
            <HomeUserLeft/>
        </div>
        <div>
            <HomeUserRight/>
        </div>
    </div>
  )
}

export default HomeUser
