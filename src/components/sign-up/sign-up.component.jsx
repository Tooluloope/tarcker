import React, { useState } from 'react';
import './sign-up.component.scss';
import { Grid, Typography, TextField, Paper, Container, makeStyles, CssBaseline, Avatar, FormControlLabel, Button, Link, Checkbox, Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const SignUp = ()=> {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [displayName, setDisplayName] = useState('')

  
    const handleSubmit = async (e)=> {
      e.preventDefault(); 

      if(password !== password1) return 

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDocument(user, {displayName})
      } catch (error) {
        console.log(error.message)
      }

      setEmail('')
      setDisplayName('') 
      setPassword('')
      setPassword1('')
    }

    return(
        
       <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit = {handleSubmit} >
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Full Name"
            name="displayName"
            value={displayName}
            autoComplete="displayName"
            type='text'
            onChange = {event => setDisplayName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            type='email'
            onChange = {event => setEmail(event.target.value)}
 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange = {event => setPassword(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password1"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            value={password1}
            onChange = {event => setPassword1(event.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Sign Up
          </Button>
          
        </form>
      </div>
      
    </Container>
  
    )
};

export default SignUp;


 