import React from 'react'
import { CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <div className='mx-auto text-center mt-5 pt-5'>
            <CircularProgress style={{ color:'white' }} size={55} thickness={3} />
        </div>
    )
}