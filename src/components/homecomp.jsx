import React from 'react';
import Headerbdb from "./headerbdb"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const HomePage= (props) => {
  return (
    <React.Fragment>
          <Grid container component="main" sx={{ height: '80vh',background: "white"}}>

            <Grid item xs={12} sm={5} md={5} component={Paper} elevation={20} square>
    
            <Box
                sx={{
                  background: "white",
                  my: 0,
                  mx: 0,
                  margin: "0px",
                  padding: "0px",
                  width: "100%",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
            <Headerbdb />
              </Box>
              
              <Box
                sx={{
                  my: "50%",
                  marginLeft: "5%",
                  marginRight: "5%",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="div" variant="h4" sx={{color: 'black', fontWeight: 600, fontSize: "100%"}}>
                    WELCOME TO BANCO DE BOGOTA!!!
                </Typography>
              </Box>
            </Grid>
          </Grid>
      );
    </React.Fragment>
  )
}
export default HomePage;