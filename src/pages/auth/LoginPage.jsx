import React from 'react';
import { useHistory } from 'react-router-dom';
import Loginformik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Login Page</h1>
            <Loginformik/>
            <p>Don't have an account? <button variant="contained" onClick={() => history.push('/register')}>Sign up</button></p>
        </div>
    );
}

export default LoginPage;
