import { FC, JSX } from 'react';
import { Alert as MuiAlert } from '@mui/material';

type AlertTypes = 'error' | 'warning' | 'info' | 'success';

interface AlertProps {    
    message: string;
    alertType?: AlertTypes;
}

const Alert:FC<AlertProps> = ({
    message,
    alertType = 'success',
}): JSX.Element => {
    return (
        <MuiAlert severity={alertType}>{message}</MuiAlert>
    );
};

export default Alert;