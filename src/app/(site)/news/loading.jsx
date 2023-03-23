'use client'

import { Box, CircularProgress } from "@mui/material"

function loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100vw',
                height: {xs: 'calc(100vh - 60px)', md: 'calc(100vh - 140px)'},
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress sx={{color: '#3fff9c'}}/>
        </Box>
    )
}

export default loading
