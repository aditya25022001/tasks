import React from 'react'
import { Button } from '@mui/material';

export const CTAs = () => {
  return (
    <div className='py-4'>
        <Button variant='outlined' style={{ padding:'8px' }} className='mr-3'>Dashboard</Button>
        <Button variant='contained' style={{ backgroundColor:'var(--buttonBack)', padding:'8px' }} className='mr-3'>Login Now</Button>
        <Button variant='contained' style={{ backgroundColor:'var(--buttonBack)', padding:'8px' }} className='mr-3'>Back to Website</Button>
    </div>
  )
}
