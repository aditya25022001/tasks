import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, ListGroup, InputGroup } from 'react-bootstrap'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { getTaxIncAction } from '../actions/userActions';
import Button from '@mui/material/Button';
import Aos from 'aos'
import 'aos/dist/aos.css'

export const HomeScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [userError, setUserError] = useState("")

    const [credentials, setCredentials] = useState({
        Bas:"",
        LTA:"",
        HRA:"",
        FA:"",
        Inv:"",
        CityType:"",
        Rent:"",
        Med:""
    })

    const keys = ["Basic","LTA","HRA","Food Allowance","Investments","City type","Rent","Mediclaim premium"]
    const values = ["Bas","LTA","HRA","FA","Inv","CityType","Rent","Med"]

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userGetTaxInc = useSelector(state => state.userGetTaxInc)
    const { loading, error, taxInc } = userGetTaxInc

    useEffect(() => {
        Aos.init({  })
        if(!userInfo){
            navigate('/login')
        }
    },[navigate, userInfo])

    const openDialog = (e) => {
        e.preventDefault()
        if(credentials.CityType===""){
            setUserError("City type is required")
        }
        else{
            setShow(true)
        }
    }

    const handleClose = () => {
        setShow(false)
    }

    const calculateHandler = () => {
        const { Bas, CityType, LTA, HRA, FA, Med, Inv, Rent } = credentials
        setShow(false)
        dispatch(getTaxIncAction(parseInt(Bas), parseInt(LTA), parseInt(HRA), parseInt(FA), parseInt(Inv), parseInt(Rent), CityType, parseInt(Med)))
    }

    if(userError){
        setTimeout(() => {
            setUserError("")
        },1500)
    }

    return (
        <>
            {(error || userError) && <Message variant="error" message={error || userError} />}
            {loading 
            ? <Loader/> 
            : <div className='container w-100 mx-auto'>
                <h4 data-aos="fade-right" className='mb-4 mt-3 headingMain'>
                    Calculate your taxable income
                </h4>
                <Form onSubmit={openDialog} className='mb-5'>
                    <ListGroup className='card p-3'>
                        <div className='d-flex w-100 calculateDiv'>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>Basic<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.Bas} onChange={e => setCredentials({...credentials, Bas:e.target.value})} required/>
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>LTA<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.LTA} onChange={e => setCredentials({...credentials,LTA:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                        </div>
                        <div className='d-flex w-100 calculateDiv'>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>HRA<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.HRA} onChange={e => setCredentials({...credentials,HRA:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>Food Allowance<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.FA} onChange={e => setCredentials({...credentials,FA:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                        </div>
                        <div className='d-flex w-100 calculateDiv'>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>Investments<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.Inv} onChange={e => setCredentials({...credentials,Inv:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>Actual Rent<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.Rent} onChange={e => setCredentials({...credentials,Rent:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                        </div>
                        <div className='d-flex w-100 calculateDiv'>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>Mediclaim policy premium<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>{String.fromCharCode(8377)}</InputGroup.Text>
                                        <Form.Control type="number" value={credentials.Med} onChange={e => setCredentials({...credentials,Med:e.target.value})} required />
                                    </InputGroup>
                                </Form.Group>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 mt-1 w-100" style={{ flex:1 }} data-aos="zoom-in">
                                <Form.Group>
                                    <Form.Label>City Type<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                                    <RadioGroup style={{ display:'flex' }}>
                                        <div className='mr-5'>
                                            <FormControlLabel onChange={e => setCredentials({...credentials,CityType:e.target.value})} control={<Radio/>} label="Metro" value="metro" />
                                        </div>
                                        <div>
                                            <FormControlLabel onChange={e => setCredentials({...credentials,CityType:e.target.value})} control={<Radio/>} label="Non Metro" value="non-metro" />
                                        </div>
                                    </RadioGroup>
                                </Form.Group>
                            </ListGroup.Item>
                        </div>
                        <ListGroup.Item data-aos="zoom-in" className="border-0 mt-2 w-100" style={{ flex:1 }}>
                            <Button type="submit" className='w-100' variant='contained'>Calculate</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Form>
            </div>}
            {taxInc && <div className='container mx-auto text-center'>
                <h4>Your taxable income is : {String.fromCharCode(8377)} {taxInc?.TaxInc.toLocaleString('en-IN')}</h4>
            </div>}
            <Dialog onClose={handleClose} style={{ padding:'5rem' }} maxWidth="sm" fullWidth={true} open={show}>
                <DialogTitle>Entered details</DialogTitle>
                <DialogContent>
                    {keys.map((each,index) => (
                        <div key={index} className='my-1'>
                            <strong>{each}</strong> : {credentials[values[index]]}
                        </div>
                    ))}
                    <Button onClick={e => calculateHandler()} className='mt-3 w-100' variant="contained">Calculate</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
