'use client';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)({
    '&.MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 64px)',
    },
});