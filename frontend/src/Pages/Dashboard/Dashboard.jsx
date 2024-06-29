import React from 'react'
import "./Dashboard.css"
import Sidebar from '../../Components/sidebar/Sidebar';

import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className='grid-container'>
      <Sidebar />
      <main style={{ marginLeft: "0%" }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard