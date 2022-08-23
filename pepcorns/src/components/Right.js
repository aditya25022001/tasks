import React from 'react'
import { Button, Card, Divider } from '@mui/material'

export const Right = () => {
  return (
    <div className='right'>
        <div>
            <Card className='pb-2 border'>
                <div className='p-4'>
                    <h1 style={{ color:'var(--genBack)' }}>{String.fromCharCode(8377)}{" "}0</h1>
                    <div>0 % of minimum goal raised</div>
                </div>
                <Divider/>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h3>0</h3>
                    <div style={{ color:'#8898aa' }}>0 % of minimum goal raised</div>
                    <Divider className='pt-4'/>
                </div>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h3>0 Days</h3>
                    <div style={{ color:'#8898aa' }}>Left to invest</div>
                </div>
                <Divider/>
                <div className='px-4 py-0 pt-4'>
                    <Button variant="contained" style={{ backgroundColor:'var(--buttonBack)', width:'100%' }}>Campaign Expired</Button>
                </div>
                <div className='py-2' style={{ textAlign:'center', fontSize:'15px' }}>₹ 1000 Minimum Investment</div>
            </Card>
        </div>
        <div className='mt-5'>
            <h3 className='mb-3'>Deal Terms</h3>
            <div className='mb-3' style={{ fontSize:12 }}>Perks you will receive for Investing Letzrent</div>
            <Card className='border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}2000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions</div>
                    <div>TNC : Limited to the first 100</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
            <Card className='mt-5 border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}5000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions</div>
                    <div>TNC : Limited to the first 200</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
            <Card className='mt-5 border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}10000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• Exclusive interest in owning equity with an investment of ₹50,000 — ₹2,00,000 | • Invite to exclusive LetzRent team chat | • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) | • Early access to new features & promotions</div>
                    <div>TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
            <Card className='mt-5 border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}25000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</div>
                    <div>TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
            <Card className='mt-5 border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}50000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</div>
                    <div>TNC : Equity benefits with voting rights. Limited to the first 5 investors.</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
            <Card className='mt-5 border'>
                <div className='p-4' style={{ color:'#525f7f' }}>
                    <h1 >{String.fromCharCode(8377)}{" "}100000</h1>
                    <div className='mb-4'>Invest</div>
                    <div className='mb-3'>• Exclusive interest in owning equity with an investment of above ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</div>
                    <div>TNC : Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors.</div>
                    <Button variant="contained" disabled style={{ backgroundColor:'var(--genBack)', color:'white', width:'100%', opacity:'0.6' }} className='mt-4'>Invest</Button>
                </div>
            </Card>
        </div>
    </div>
  )
}
