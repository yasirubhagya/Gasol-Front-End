import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import  { GoogleLogin } from 'react-google-login';
const SignInWithGoogleStyles = theme => ({
   root:{
       margin : '1rem 4rem'
   }
})

const LoginSuccess =(response)=>{

}

const LoginFailure =(response)=>{

}
const SignInWithGoogle = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
        <GoogleLogin
            clientId="247899695031-i2lrgqjm8hoo9e0l650d68e2187fjt7v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={LoginSuccess}
            onFailure={LoginFailure}
            cookiePolicy={'single_host_origin'}
        />
        </div>
    );
}

export default withStyles(SignInWithGoogleStyles)(SignInWithGoogle);