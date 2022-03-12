import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const Message = ({ message, variant }) => {

    const [open, setOpen] = useState(true)

    if(open){
        setTimeout(() => {
            setOpen(false)
        },2500)
    }

    return (
        <Snackbar className={variant} anchorOrigin={{ vertical:"bottom", horizontal:"center" }} open={open} autoHideDuration={2500}>
            <Alert variant="filled" className={variant} severity={variant}>
                {message}
            </Alert>
        </Snackbar>
    )
}