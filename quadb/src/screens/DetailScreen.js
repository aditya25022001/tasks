import React, { useEffect, useState } from 'react'
import { Form, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { bookShowAction } from '../actions/userActions'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

export const DetailScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userShows = useSelector(state => state.userShows)
    const { shows } = userShows

    const userBook = useSelector(state => state.userBook)
    const { loading, error, success, details } = userBook

    const location = useLocation().pathname.split('/')[2]

    const [date, setDate] = useState("")
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState({})
    const [user, setUser] = useState({ email:"", mobno:"", name:"" })

    useEffect(() => {
      if(shows && shows.length>0){
        setShow(shows.find((s => s.show.id===parseInt(location))))
      }
      if(localStorage.getItem('userInfo')){
        const { name, email, mobno } = JSON.parse(localStorage.getItem('userInfo'))
        setUser({ name, email, mobno })
    }
    },[location,shows])

    const bookHandler = (e) => {
      e.preventDefault()
      dispatch(bookShowAction(user.email, user.mobno, user.name, show.show.name, date))
      setOpen(false)
  }

  if(success){
    setTimeout(() => {
      navigate("/")
    },2000)
  }

    return (
      <>
        {error && <Message variant="error" message={error} />}
        {success && <Message variant='success' message={"Successfully booked "+details.name + " on "+details.date} />}
        {loading ? <Loader/> : Object.keys(show).length>0 && 
        <div className='my-3'>
          <div className='d-flex detail'>
            <Image rounded className='border' width="100%" height={700} src={(show && show.show.image.original) || (show && show.show.image.medium)} />
            <div className={typeof window!==undefined && window.innerWidth>800 ? "ml-3" : "mt-4"}>
                <h4 style={{ fontWeight:'600' }}>{show && show.show.name}</h4>
                <div className='d-flex mb-2' style={{ flexWrap:'wrap' }}>
                  <div className='mr-3 detail_point'>{show && show.show.averageRuntime} minutes</div>
                  <div className='mr-3 detail_point'>{show && show.show.premiered}</div>
                  {show && show.show.network && <div className='mr-3 detail_point'>{show && show.show?.network?.name}({show && show?.show?.network?.country?.code})</div>}
                </div>
                <Typography style={{ fontSize:'14.5px' }}>
                  {show && show.show.summary.replace(/<\/?[^>]+(>|$)/g,"")}
                </Typography>
                <div className='mt-2 d-flex'>
                  <div className='mr-3'>
                    <div className='my-1 detail_point'>Genre</div>
                    <div className='my-1 detail_point'>Schedule</div>
                    <div className='my-1 detail_point'>Rating</div>
                    <div className='my-1 detail_point'>Language</div>
                    <div className='my-1 detail_point'>Status</div>
                    <div className='my-1 detail_point'>Show type</div>
                    <div className='my-1 detail_point'>Official Site</div>
                    <div className='my-1 detail_point'>Score</div>
                  </div>
                  <div>
                    <div className='my-1 detail_point_info'>{show && show.show.genres.join(',')}</div>
                    <div className='my-1 detail_point_info'>{show && show.show.schedule.days.join(',')} at {show && show.show.schedule.time} hours</div>
                    <div className='my-1 detail_point_info'>{(show && show.show.rating.average!==null) ? show.show.rating.average : "No rating"}</div>
                    <div className='my-1 detail_point_info'>{show && show.show.language}</div>
                    <div className='my-1 detail_point_info'>{show && show.show.status}</div>
                    <div className='my-1 detail_point_info'>{show && show.show.type}</div>
                    <div className='my-1 detail_point_info'><a style={{ color:'black' }} rel="noopener noreferrer" target="_blank" href={show && show.show.officialSite}>Visit</a></div>
                    <div className='my-1 detail_point_info'>{show && Math.round(show.score*100,2)}%</div>
                  </div>
                </div>
                <Button onClick={e => setOpen(true)} variant='contained' className='mt-2 btnBook' color="secondary">
                  Book now
                </Button>
            </div>
          </div>
        </div>}
        <Dialog fullWidth open={open} onClose={e => setOpen(false)}>
          <DialogTitle>Book Ticket</DialogTitle>
          <DialogContent className='pt-2'>
            <Form onSubmit={bookHandler} style={{ flexDirection:'column' }} className='d-flex'>
              <TextField required color="secondary" className='my-2' defaultValue={show && show.show && show.show.name && show.show.name} variant="outlined" label="Movie/Show name" />
              <TextField required className='my-2' color="secondary" onChange={e => setDate(e.target.value)} autoFocus variant="outlined" type="date" label="Date" />
              <TextField required className='my-2' color="secondary" onChange={e => setUser({...user,name:e.target.value})} defaultValue={user.name} variant="outlined" label="User name" />
              <TextField required className='my-2' color="secondary" onChange={e => setUser({...user,mobno:e.target.value})} defaultValue={user.mobno} variant="outlined" label="Mobile Number" type="tel" />
              <TextField required className='my-2' color="secondary" defaultValue={user.email} onChange={e => setUser({...user,email:e.target.value})} variant="outlined" label="Email" type="email" />
              <Button type="submit" className='mt-2' color="secondary" variant='contained'>Book</Button>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    )
}
