import React, { useState } from 'react';
import './sign-in.component.scss';
import { Grid, Typography, TextField, Paper, Container, makeStyles, CssBaseline, Avatar, FormControlLabel, Button, Link, Checkbox, Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

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

const SignIn = ()=> {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleChange = (e)=> {
    //     const {name, value} = e.target;
    //     if (name === 'email') {
    //         setEmail = value
    //    }else{
    //        setPassword = value
    //    }

    // }
    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            
            console.log(email, password)
            await auth.signInWithEmailAndPassword(email, password)
        }catch(err) {
            console.log(err.message)
        }

        setEmail('')
        setPassword('')


    }


    return(
        
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit = {handleSubmit}>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                   
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange = {event => setEmail(event.target.value)}
                    value = {email}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    
                    autoComplete="current-password"
                    onChange = {event => setPassword(event.target.value)}
                    value = {password}
                    />
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}

                    >
                    Sign In
                    </Button>

                    <Button
                    style = {{backgroundColor: '#D34836', marginTop: 0}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick = {signInWithGoogle}
                    >
                    Sign In With Google
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </form>
            </div>
      
    </Container>
  
    )
};

export default SignIn;


 