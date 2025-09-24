import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const ProctectRoutes = () => {
    const user=localStorage.getItem("user");
  return  user?<Outlet/>:<Navigate to='/loading' />;
}

export default ProctectRoutes
