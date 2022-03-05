import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header = () => {

    return (
        <Navbar collapseOnSelect className="border-bottom" expand="lg" variant="light">
            <Navbar.Brand>
                <Link to='/' className='header_link_main font-weight-bold d-flex' style={{ alignItems:'center' }}>
                    QuadB Task
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls="responsive-navbar-nav">
                <span>
                    <MenuOpenIcon style={{ color:'black' }}/>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={typeof window!==undefined && window.innerWidth>992 ? 'ml-auto mr-5' : 'border-bottom py-1'}>
                    <Link className='header_link' to="/">
                        Home
                    </Link>
                </Nav>
                <Nav className={typeof window!==undefined && window.innerWidth>992 ? 'mr-2' : 'pt-1'}>
                    <a className='header_link' href='https://github.com/aditya25022001/tasks' target='_blank' rel='noopener noreferrer'>
                        Source {"</>"}
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
