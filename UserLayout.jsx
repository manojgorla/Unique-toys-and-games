import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='h-full '>
      <Header />

 
     <Outlet />
  


    </div>
  )
}

export default UserLayout
