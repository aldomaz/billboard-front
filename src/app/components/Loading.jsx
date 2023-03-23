import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (
        <Stack>
            <CircularProgress color="#000"/>
        </Stack>
    )
}

export default Loading
