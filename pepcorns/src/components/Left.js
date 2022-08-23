import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import '../css/App.css'
import { Card } from '@mui/material';

export const Left = () => {
  return (
    <div style={{ width:'100%' }} className='mr-3'>
        <div className='video'>
            <div className='mb-1'>
                <a style={{ color:'var(--genBack)', fontSize:'14px', fontWeight:500, textDecoration:'none' }} href="https://www.youtube.com/watch?v=biGcDeB2PbQ" target="_blank" rel="noreferrer">Unable to view video ? Click here</a>
            </div>
            <Card className='pb-4'>
                <div style={{ backgroundColor:'black' }}>
                    <iframe video-url="currentVdo" player="bestPlayer" className="ng-isolate-scope" id="unique-youtube-embed-id-3" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="LetzRent for Pepcorns | Making renting simple, affordable and rewarding." width="640" height="390" src="https://www.youtube.com/embed/biGcDeB2PbQ?start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fapp.pepcorns.com&amp;widgetid=3"></iframe>
                </div>
                <div className='mt-4' style={{ display:'flex', justifyContent:'space-around', fontSize:13, color:'var(--genBack)' }}>
                    <div><LocationOnIcon style={{ fontSize:16 }} />Mumbai, Maharashtra</div>
                    <div><LanguageIcon style={{ fontSize:16 }} />https://letzrent.com</div>
                    <div>
                        <InstagramIcon style={{ fontSize:16 }} />
                        <FacebookRoundedIcon style={{ fontSize:16 }} />
                        <SmartDisplayRoundedIcon style={{ fontSize:16 }} />
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}
