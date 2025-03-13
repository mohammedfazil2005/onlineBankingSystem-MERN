import React from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'


const HomeAdminRight = ({categoryName}) => {
  return (
    <div>
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
    </div>
  )
}

export default HomeAdminRight
