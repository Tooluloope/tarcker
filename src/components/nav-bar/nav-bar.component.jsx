import React from 'react'
import './nav-bar.component.scss';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Home from '../../pages/home/home.page';
import Account from '../../pages/accounts/account.page';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const NavBar = ({currentUser})=> {
    const classes = useStyles();
    return(
        <Router>
           

            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={Logo} width="auto" height="30" alt="" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="nav-link"  tabIndex="-1"  to='/'>Home</Link>
                    </Typography>
                    <Button color="inherit">
                        
                    <Link className="nav-link"  tabIndex="-1"  to='/sign-in'>Sign In</Link>
                    </Button>
                    </Toolbar>
                </AppBar>
                </div>
            <Route exact component={Home}  path='/' />
            <Route  component={Account}  path='/sign-in' />
        </Router>
        
    )
};
export default NavBar;