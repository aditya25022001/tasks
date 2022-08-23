import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../css/App.css'
import { Button, Card, Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';

export const Left = () => {

    const button = (name, color, bcolor) => {
        return(
            <div style={{ width:'100%' }}>
                <Button variant='contained' className='py-2' style={{ backgroundColor:bcolor, color:color, borderRadius:6, width:'100%' }}>
                    <ShoppingBagIcon style={{ fontSize:15 }} />
                    <span style={{ fontWeight:400 }}>{name}</span>
                </Button>
            </div>
        )
    }

  return (
    <div style={{ width:'100%' }} className='mr-3 left'>
        <div className='video'>
            <div className='mb-1'>
                <a style={{ color:'var(--genBack)', fontSize:'14px', fontWeight:500, textDecoration:'none' }} href="https://www.youtube.com/watch?v=biGcDeB2PbQ" target="_blank" rel="noreferrer">Unable to view video ? Click here</a>
            </div>
            <Card className='pb-4 border'>
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
        <div className='buttons mt-5 mb-3' style={{ width:'100%', display:'flex', justifyContent:'space-between' }}>
            {button("Pitch","white","var(--genBack)")}
            {button("Details","#525f7f","white")}
            {button("Updates","#525f7f","white")}
            {button("Comments(0)","#525f7f","white")}
        </div>
        <Card className='rounded-0 border'>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }} className='p-3'>
                <Typography>DECK</Typography>
                <Button style={{ backgroundColor:'var(--genBack)', color:'white', fontWeight:500 }}>Download pitch deck</Button>
            </div>
            <Divider/>
            <div className='p-4'>
                <div>
                    <div style={{ fontWeight:500, fontSize:14 }} className='mb-2'>10 Seconds Pitch</div>
                    <div style={{ color:'#8898aa', fontSize:14, fontWeight:600 }}>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</div>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:14 }} className='mb-2'>Deck Info</div>
                    <h3>LetzRent</h3>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Highlights</div>
                    <Container>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>Running profitable pilot in Bengaluru.</li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>20k+ registered users, 4.2 app rating and 10k+ social media following </li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>Company is projecting 100cr+ transaction volume in 5 years</li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more.</li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>GenZ CTO and co-founder.</li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>Expansion is easy and the untapped customer base is huge.</li>
                        <li style={{ fontSize:14, color:'#8898aa' , fontWeight:450}}>Been in news articles, already making buzz.</li>
                    </Container>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Traction</div>
                    <img src="./images/one.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Smarter Way To Rent</div>
                    <img src="./images/two.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Customers Want Low Prices</div>
                    <Typography style={{ fontWeight:'light', color:'#8898aa' }} className='mb-2'>
                        To get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However for rental products, there is no one & to fill this need and make the process efficient we launched LetzRent, hoping to have a first-mover advantage and dominate the market in the coming future.
                    </Typography>
                    <img src="./images/three.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Single KYC</div>
                    <Typography style={{ fontWeight:'light', color:'#8898aa' }} className='mb-2'>
                        Renting is a KYC dependent process, every time a customer books a service from a different service provider he/she will have to get a new KYC done. With Letzrent, the hassle of multiple KYC gets removed and with a single KYC, customers can rent from multiple brands.
                    </Typography>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Vast Selection</div>
                    <Typography style={{ fontWeight:'light', color:'#8898aa' }} className='mb-2'>
                        Being an aggregator Letzrent offers more options than category leaders.
                    </Typography>
                    <img src="./images/four.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Why Renting? </div>
                    <ol style={{ color:'#8898aa' }}>
                        <li>Demographic Twist: Commitment phobic millennials prefer an asset lite life with a bias toward renting rather than buying.</li>
                        <li>Flexibility: Renting allows people to upgrade or change assets easily.</li>
                        <li>Convenience: With the rental customers dispense with the headache of down payment, maintenance, insurance etc.</li>
                    </ol>
                    <img src="./images/five.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Market Size</div>
                    <img src="./images/six.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Competitors</div>
                    <img src="./images/seven.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Feedback: People love us</div>
                    <img src="./images/eight.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Future and growth</div>
                    <img src="./images/eight1.png" alt="transaction"/>
                    <img src="./images/nine.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Core Team</div>
                    <img src="./images/ten.png" alt="transaction"/>
                </div>
                <Divider className='py-3' />
                <div className='pt-4'>
                    <div style={{ fontWeight:500, fontSize:17 }} className='mb-2'>Documents for Investors</div>
                    <li>
                        <a href="https://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view" rel="noreferrer" target="_blank">
                            Due Diligence Report
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view" rel="noreferrer" target="_blank">
                            Certificate of Incorporation                        
                        </a>
                    </li>
                </div>
                <Divider className='py-3' />
            </div>
        </Card>
    </div>
  )
}
