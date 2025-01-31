import { FC, JSX }from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Progress: FC = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex' }} data-id='progress-container'>
            <CircularProgress />
        </Box>
    );
}

export default Progress;