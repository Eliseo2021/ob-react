import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterFormik from '../../components/pure/forms/registerFormik'

const Registerpage = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik />
            <p>Already have an account? <button variant="contained" onClick={() => history.push('/login')}>Log in</button></p>
        </div>
    );
}

export default Registerpage;
