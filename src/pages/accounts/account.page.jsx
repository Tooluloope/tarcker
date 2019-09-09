import React from 'react';
import './account.page.scss';
import  SignIn  from '../../components/sign-in/sign-in.component';

import { Grid,  makeStyles} from '@material-ui/core'
import SignUp from '../../components/sign-up/sign-up.component';

const styles = {
    Grid: {
        minHeight: '80vh' ,
        margin: "30px"
    },
    Paper: {
        paddingTop: 10
    },
    root: {
        overflowX: 'hidden',
       
        marginRight: 'auto',
        marginLeft:'auto',
    }
  
}
const useStyles = makeStyles(styles);

const Account = ()=> {
    const classes = useStyles();
    

    return(
        <div className={classes.root}> 
            
        
            <Grid container
                className={classes.Grid}
                item
                direction="row"
                justify="center"
                alignItems="center"
                sm={12}
                spacing={10}
                >
                <Grid item sm  >
                    <SignIn></SignIn>
                </Grid>
                <Grid item sm style = {{marginRight: 50}}> 
                    <SignUp>

                    </SignUp>
                    

                </Grid>
            </Grid>
        </div>

    
    )
};




 

export default Account;