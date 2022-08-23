import { Avatar, Container, Chip } from '@mui/material'
import React from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShareIcon from '@mui/icons-material/Share';

export const Profile = () => {
  return (
    <Container>
        <div>
            <div style={{ display:'flex', alignItems:'center' }}>
                <Avatar style={{ width:'74px', height:'74px', flex:0.075 }}/>
                <div style={{ flex:0.6 }} className='pl-4'>
                    <div style={{ fontSize:'35px', fontWeight:'500' }}>Letzrent</div>
                    <div className='mb-2' style={{ color:'#8898aa', fontSize:'14px' }}>Address : Mumbai Maharashtra</div>
                    <div className='mb-2' style={{ color:'#525f7f', fontSize:'12.5px' }}><span style={{ color:'#2dce89' }}>●</span> EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F</div>
                    <div className='mb-2' style={{ color:'#32325d', fontSize:'10.4px' }}>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</div>
                </div>
                <div style={{ display:'flex', color:'var(--genBack)', flex:0.3 }}>
                    <div style={{ display:'flex', alignItems:'center' }} className='mr-4'><PersonAddAlt1Icon style={{ fontSize:20 }}/> Follow</div>
                    <div style={{ display:'flex', alignItems:'center' }}><ShareIcon style={{ fontSize:15 }}/> Share</div>
                </div>
            </div>
        </div>
        <Container className='mt-3'>
            <Chip style={{ backgroundColor:'rgb(251, 220, 218)', borderRadius:'6px', fontWeight:500, padding:0 }}  label="GEN Z FOUNDER"/>
            <Chip label="MOBILITY" style={{ backgroundColor:'#ffffff', borderRadius:'6px', fontWeight:500, padding:0 }} />
            <Chip label="E-COMMERCE" style={{ backgroundColor:'#ffffff', borderRadius:'6px', fontWeight:500, padding:0 }} />
        </Container>
    </Container>
  )
}
