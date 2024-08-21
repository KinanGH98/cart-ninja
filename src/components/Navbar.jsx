import React from 'react';
import NavbarBs from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import {useNavBar} from "../context/NavBarContext.jsx";

function Navbar()
{
    const {navButtons} = useNavBar();

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm'>
            <Container>
                <Image className='logo' width='115px' src='./imgs/logo.svg'></Image>
                <Nav className='me-auto '>
                    <Nav.Link as={NavLink} to='/'>Store</Nav.Link>
                    <Nav.Link as={NavLink} to='/admin'>Admin</Nav.Link>
                </Nav>
                {
                    navButtons.map((component, index) =>
                        (<React.Fragment key={'nav-bar-button' + index}>{component}</React.Fragment>))
                }
            </Container>
        </NavbarBs>
    );
}

export default Navbar;