import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';


const LoginSuccess = (response) => {
    console.log('success',response);
    localStorage.setItem('isAdmin','true');
}

const LoginFailure = (response) => {
    console.log('error',response.error);
}

const Login = (props) => {

    return (
        
            <GoogleLogin
                clientId="247899695031-i2lrgqjm8hoo9e0l650d68e2187fjt7v.apps.googleusercontent.com"
                render={renderProps => (
                    <Button variant="outlined" color="primary" className={props.className} onClick={renderProps.onClick} disabled={renderProps.disabled}>LogIn</Button>
                )}
                buttonText="Login"
                onSuccess={LoginSuccess}
                onFailure={LoginFailure}
                cookiePolicy={'single_host_origin'}
            />
    
    );

}

export default Login;