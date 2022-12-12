import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElement'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="coin">Coin
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar