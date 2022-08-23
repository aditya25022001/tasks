import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Avatar, Popover, List, ListItem, Divider, ListItemButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HelpIcon from '@mui/icons-material/Help';

export const Header = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);

  const openPopover = (e) => setAnchorEl(e.currentTarget); 

  const closePopover = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='pb-2' style={{ backgroundColor:"var(--genBack)", boxShadow:"none" }}>
          <Toolbar>
            <Typography variant="span" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Avatar style={{ width:30, height:30, cursor:'pointer' }} onClick={openPopover} />
          </Toolbar>
        </AppBar>
        <Popover open={open} anchorEl={anchorEl} onClose={closePopover} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <List style={{ width:'200px', borderRadius:'15px !important' }}>
            <ListItem style={{ fontSize:'12px' }} className='mb-1'>
                WELCOME!
            </ListItem>
            <Divider/>
            <ListItemButton className='py-2 mt-2' onClick={e => { setAnchorEl(null); setDialogOpen(true); }}>
                <DirectionsRunIcon className='mr-2' style={{ fontSize:20 }} /> 
                <span style={{ fontSize:'14.5px' }}>Logout</span>
            </ListItemButton>
          </List>
        </Popover>
      </Box>
      <Dialog open={dialogOpen} maxWidth="xs" onClose={e => setDialogOpen(false)}>
        <DialogTitle style={{ color:'#525f7f', display:"flex", alignItems:'center' }}>
          <HelpIcon className='mr-2'/>
          <span>Logout</span>
        </DialogTitle>
        <DialogContent style={{ color:'#525f7f', fontSize:'17px' }} className='pb-2'>
          Are you sure, you want to logout of the application ?
        </DialogContent>
        <DialogActions className='m-2'>
          <Button variant='contained' style={{ backgroundColor:'var(--genBack)', color:'#ffffff', fontWeight:"550", fontSize:'14px' }}>Proceed</Button>
          <Button variant='contained' style={{ backgroundColor:'lightgray', color:'black', fontWeight:"550", fontSize:'14px' }} onClick={e => setDialogOpen(false) } >Cancel</Button>
        </DialogActions> 
      </Dialog>
    </>
  );
}