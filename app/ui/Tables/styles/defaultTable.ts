'use client';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { grey } from '@mui/material/colors'; 

export const StyledTable = styled(Table)({
    '&': {
        borderCollapse: 'separate',
        borderSpacing: '0 5px',
    },
});

export const StyledTableHeaderRow = styled(TableRow)({
    '&': {
        'th': {
            backgroundColor: grey[100],
            fontWeight: 'bold',
            
            '&:first-of-type': {
                paddingLeft: '30px',
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
            },
    
            '&:last-of-type': {
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
            }
        },
    },
});

export const StyledTableBody = styled(TableBody)({
    '& tr': {
    
        '&:nth-of-type(odd)': {
            backgroundColor: grey[100],
        },

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: grey[200],
        },

        '& td:first-of-type': {
            paddingLeft: '30px',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
        },

        '& td:last-of-type': {
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
        }
    },
});

export const StyledDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});