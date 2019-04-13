import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider,createMuiTheme,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Login from '../Auth/Login';
import '../App.css';
import img from '../logo.png';



const theme = createMuiTheme({
    palette: {
      primary: { main: lightGreen['A400'] }, // Purple and green play nicely together.
      secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
  });
  

const AppBarStyles = {
    root: {
        flexGrow: 1,
    },

    menuBar: {
        background: '#ffffff',
        height: '100px',
    },

    toolbar: {
        height: '100%',

    },
    button:{
        margin:'0.25rem'
    },
    grow:{
        flexGrow: 1,
    },
    actionSet:{
        display:'none',
        [theme.breakpoints.up('sm')]: {
            display:'flex',
          },
        
    },
    placeholder:{
        display:'flex',
    },
    logo:{
        width:'80px',
        height:'80px',
        margin:'0.25rem'
    }
   
};

const MenuBar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.menuBar} position="static" color="default">
                <Toolbar className={classes.toolbar}>
                    <MuiThemeProvider theme={theme}>
                    <div className={classes.placeholder}>
                    <img className={classes.logo} alt='' src={img}/>
                    </div>
                    <Typography variant="h4" color="primary">
                        Channel me
                    </Typography>
                    
                    <div className={classes.grow}></div>
                    <div className={classes.actionSet}>
                    <Login className={classes.button}/>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Register
                    </Button>
                    </div>
                    </MuiThemeProvider>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(AppBarStyles)(MenuBar);
