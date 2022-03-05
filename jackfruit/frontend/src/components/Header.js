import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Navbar collapseOnSelect className="border-bottom" expand="lg" variant="light">
            <Navbar.Brand>
                <Link to='/' className='header_link_main font-weight-bold d-flex' style={{ alignItems:'center' }}>
                    JackFruit Task
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav">
                <span>
                    <MenuOpenIcon style={{ color:'black' }}/>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={typeof window!==undefined && window.innerWidth>992 ? !userInfo ? 'ml-auto mr-5' : 'ml-auto mr-5' : 'border-bottom py-1'}>
                    <Link className='header_link' to="/">
                        Home
                    </Link>
                </Nav>
                <Nav className={typeof window!==undefined && window.innerWidth>992 ? !userInfo ? 'mr-5' : 'mr-2' : 'border-bottom py-1'}>
                    <a className='header_link' href='https://github.com/aditya25022001/tasks' target='_blank' rel='noopener noreferrer'>
                        Source {"</>"}
                    </a>
                </Nav>
                {!userInfo && <Nav className={typeof window!==undefined && window.innerWidth>992 ? 'mr-2' : 'mr-2 pt-2'}>
                    <Link to='/login' className='header_link'>
                        Login
                    </Link>
                </Nav>}
            </Navbar.Collapse>
        </Navbar>
    )
}
