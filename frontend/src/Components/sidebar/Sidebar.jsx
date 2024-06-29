import React from 'react'
import Logo from "../../Assets/logo.png"
import sidebarNav from "./index";
import "./Sidebar.css"
import { Link, useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@material-ui/core';


const SIDEBAR_WIDTH = 325

const Sidebar = ({ width, closeDrawer }) => {
  const navigate = useNavigate();
  return (
    <Box component='aside' width={SIDEBAR_WIDTH} id='sidebar' p={2} pt={4} boxShadow={10} style={{ userSelect: 'none' }}>
      <Box display='flex' sx={{ justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <IconButton style={{ padding: 0, width: 'auto' }} size='small' onClick={() => navigate("/")}>
          <img src={Logo} width={64} alt="" />
        </IconButton>
        <Typography variant='h5' >TUTOR-SWAN</Typography>

      </Box>

      <Box component='ul' mt={5}>
        {
          sidebarNav.map((item) => {
            return (
              <li className='sidebar-list-item' key={item.id}>
                <Link to={`/${item.link}`} onClick={() => {
                  if (!(width > 768)) {
                    closeDrawer()
                  }
                }}>
                  <ion-icon name={item.icon} className='icon list-icon' /> <span>{item.slug}</span>
                </Link>
              </li>
            )
          })
        }
      </Box>
    </Box>


  )
}

export default Sidebar

// <aside id='sidebar'>
//   <div className='sidebar-title'>
//     <div className='sidebar-brand' onClick={() => navigate("/")} style={{ cursor: "pointer" }}>

//     </div>
// <span className="icon close_icon">X</span>
//   </div>
// </aside>
