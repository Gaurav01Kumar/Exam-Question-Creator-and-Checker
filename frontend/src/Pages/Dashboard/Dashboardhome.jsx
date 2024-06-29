import React from 'react'
import "./DashboardHome.css"
import { Box, Typography, Grid } from '@material-ui/core'



const Dashboardhome = () => {
    return (

        <Box pl={1}>
            <Typography variant='h3'>DASHBOARD</Typography>

            <Grid  container spacing={1} style={{marginTop:'32px', width:'100%'}} >
                <Grid item xs={12} sm={6} lg={3} >
                    <Box bgcolor='#2963ff' p={2} borderRadius={4} boxShadow={5}>
                        <Typography variant='h6'>
                            PRODUCTS
                        </Typography>
                        <Typography variant='h6'>
                            300
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} lg={3} >
                    <Box bgcolor='#ff6d00' p={2} borderRadius={4} boxShadow={5}>
                        <Typography variant='h6'>
                            CATEGORIES
                        </Typography>
                        <Typography variant='h6'>
                            12
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} lg={3} >
                    <Box bgcolor='#2e7d12' p={2} borderRadius={4} boxShadow={5}>
                        <Typography variant='h6'>
                            CUSTOMERS
                        </Typography>
                        <Typography variant='h6'>
                            33
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} lg={3} >
                    <Box bgcolor='#d50000' p={2} borderRadius={4} boxShadow={5}>
                        <Typography variant='h6'>
                            ALERTS
                        </Typography>
                        <Typography variant='h6'>
                            42
                        </Typography>
                    </Box>

                </Grid>

            </Grid>


        </Box>


    )
}

export default Dashboardhome

{/* <div >
<div className='main-title'>
    <h3>DASHBOARD</h3>
</div>

<div className='main-cards'>
    <div className='card'>
        <div className='card-inner'>
            <h3>PRODUCTS</h3>

        </div>
        <h1>300</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>CATEGORIES</h3>

        </div>
        <h1>12</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>CUSTOMERS</h3>

        </div>
        <h1>33</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>ALERTS</h3>

        </div>
        <h1>42</h1>
    </div>
</div>
</div> */}