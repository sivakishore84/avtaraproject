import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from "react-router-dom";

function Menu() {
    const location = useLocation();
    return (
        <>
            <Navbar className="inverse fixedTop fluid collapseOnSelect">
                <Nav>
                    <LinkContainer className='nav-link' to={'/'} exact>
                        <NavItem>
                        {location.pathname==='/display'? "Back": ''} 
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </>
    )
}

export default Menu;