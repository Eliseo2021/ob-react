import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import ChuckNorrisJokes from '../../components/container/ChuckNorrisJokes';

const Dashboardpage = ({ onLogout }) => {

    const history = useHistory();

    const handleLogout = () => {
        onLogout();
        history.push('/login');
    }

    return (
        <div>
            <ChuckNorrisJokes />
            <Button variant="contained"
                onClick={handleLogout}>Logout</Button>
            <Copyright />
        </div>
    );
}

export default Dashboardpage;
