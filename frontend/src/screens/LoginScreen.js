import React, { useState, useEffect } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../actions/authActions'
import { useNavigate } from 'react-router'
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'

export const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showP, setShowP] = useState(false)

    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(userLoginAction(email, password))
    }

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    },[userInfo, navigate])
    
    return (
        <>
        {error && <Message variant='error' message={error} />}
        {loading 
        ? <Loader/> 
        : <Form onSubmit={loginHandler} className='formcomponent mx-auto mt-5'>
            <ListGroup className='card p-3'>
                <ListGroup.Item className='border-0'>
                    <h4 className='d-flex' style={{ alignItems:'center' }}>
                        <LockIcon className='mr-2'/>
                        <div>Login</div>
                    </h4>
                </ListGroup.Item>
                <ListGroup.Item className='border-0'>
                    <Form.Group>
                        <Form.Label>Email<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                        <Form.Control autoFocus={true} required value={email} type="email" onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item className='border-0'>
                    <Form.Group>
                        <Form.Label>Password<span style={{ color:'var(--error)' }} className='ml-1'>*</span></Form.Label>
                        <div className='d-flex' style={{ alignItems:'center' }}>   
                            <div className='mr-1' style={{ flex:1 }}>
                                <Form.Control required value={password} type={showP ? "text" :"password"} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className='px-2 py-1 rounded' style={{ flex:0, border:'1px solid #d1d1d1' }}>
                                {!showP ? <VisibilityOffIcon style={{ cursor:'pointer' }} onClick={e => setShowP(!showP)}/> : <VisibilityIcon style={{ cursor:'pointer' }} onClick={e => setShowP(!showP)}/>}
                            </div>
                        </div>
                    </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 mt-1">
                    <Button className='w-100' variant='contained' type="submit">Login</Button>
                    <div className='mt-2'>
                        <small>
                            <Link to='/register'>
                                New member? Sign up now?
                            </Link>
                        </small>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Form>}
        </>
    )
}
