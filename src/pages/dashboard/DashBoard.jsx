import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';

const Dashboardpage = ({ onLogout }) => {

    const history = useHistory();

    const handleLogout = () => {
        onLogout();
        history.push('/login');
    }

    return (
        <div>
            <Button variant="contained"
                onClick={handleLogout}>Logout</Button>
            <Copyright />
        </div>
    );
}

export default Dashboardpage;
