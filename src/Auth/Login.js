import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

const LoginSuccess = (response,history) => {
    console.log('success',response.profileObj);
    localStorage.setItem('authToken',response.tokenId)
    localStorage.setItem('isAdmin','true');
    history.push('/Doctors');
}

const LoginFailure = (response) => {
    console.log('error',response.error);
}

const Login = (props) => {
    let { history } = props;
    return (
        
            <GoogleLogin
                clientId="247899695031-i2lrgqjm8hoo9e0l650d68e2187fjt7v.apps.googleusercontent.com"
                render={renderProps => (
                    <Button variant="outlined" color="primary" className={props.className} onClick={renderProps.onClick} disabled={renderProps.disabled}>LogIn</Button>
                )}
                buttonText="Login"
                onSuccess={(response)=>LoginSuccess(response,history)}
                onFailure={LoginFailure}
                cookiePolicy={'single_host_origin'}
            />
    
    );

}

Login.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

export default withRouter(Login);